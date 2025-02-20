import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState, useRef } from 'react';

//Icons
import { PiStudent } from 'react-icons/pi';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { BsBoxSeam } from 'react-icons/bs';

const Stats = () => {
  const [ref, inView] = useInView({
    threshold: 0.6,
  });

  const [participants, setParticipants] = useState(0);
  const [products, setProducts] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [rating, setRating] = useState(0);

  const participantsRef = useRef(0);
  const productsRef = useRef(0);
  const followersRef = useRef(0);
  const ratingRef = useRef(0);

  useEffect(() => {
    if (inView) {
      // Reset values to restart animation
      participantsRef.current = 0;
      productsRef.current = 0;
      followersRef.current = 0;
      ratingRef.current = 0;

      setParticipants(0);
      setProducts(0);
      setFollowers(0);
      setRating(0);

      const animateValue = (setter, end, duration, ref) => {
        let start = 0;
        const range = end - start;
        let current = start;
        const increment = end > start ? 1 : -1;
        const stepTime = Math.abs(Math.floor(duration / range));

        const timer = setInterval(() => {
          current += increment;
          setter(current);
          ref.current = current;
          if (current === end) {
            clearInterval(timer);
          }
        }, stepTime);

        return () => clearInterval(timer);
      };

      const animateParticipants = animateValue(
        setParticipants,
        126,
        2000,
        participantsRef
      );
      const animateProducts = animateValue(setProducts, 4, 1500, productsRef);
      const animateFollowers = animateValue(
        setFollowers,
        48,
        2500,
        followersRef
      );
      const animateRating = animateValue(setRating, 50, 1000, ratingRef);

      return () => {
        animateParticipants();
        animateProducts();
        animateFollowers();
        animateRating();
      };
    }
  }, [inView]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className='mx-auto md:max-w-xl lg:max-w-screen-xl grid gap-8 grid-cols-2 lg:grid-cols-4'
      variants={fadeInVariants}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
    >
      <div className='text-center'>
        <div className='flex items-center justify-center w-16 h-16 mx-auto mb-3 rounded-full bg-cyan-50 shadow-md'>
          <AiOutlineUsergroupAdd className='w-8 h-8 sm:w-10 sm:h-10 text-cyan-800' />
        </div>
        <h6 className='text-base sm:text-2xl lg:text-4xl font-bold text-cyan-800'>
          {participants}+
        </h6>
        <p className='text-sm mb-2 font-semibold text-gray-700'>Mengikuti</p>
      </div>
      <div className='text-center'>
        <div className='flex items-center justify-center w-16 h-16 mx-auto mb-3 rounded-full bg-indigo-50 shadow-md'>
          <BsBoxSeam className='w-8 h-8 sm:w-10 sm:h-10 text-indigo-400' />
        </div>
        <h6 className='text-base sm:text-2xl lg:text-4xl font-bold text-indigo-400'>
          {products}+
        </h6>
        <p className='text-sm mb-2 font-semibold text-gray-700'>Product</p>
      </div>
      <div className='text-center'>
        <div className='flex items-center justify-center w-16 h-16 mx-auto mb-3 rounded-full bg-green-50 shadow-md'>
          <PiStudent className='w-8 h-8 sm:w-10 sm:h-10 text-green-700' />
        </div>
        <h6 className='text-base sm:text-2xl lg:text-4xl font-bold text-green-700'>
          {followers}+
        </h6>
        <p className='text-sm mb-2 font-semibold text-gray-700'>Pengikut</p>
      </div>
      <div className='text-center'>
        <div className='flex items-center justify-center w-16 h-16 mx-auto mb-3 rounded-full bg-orange-50 shadow-md'>
          <AiOutlineStar className='w-8 h-8 sm:w-10 sm:h-10 text-orange-900' />
        </div>
        <h6 className='text-base sm:text-2xl lg:text-4xl font-bold text-orange-900'>
          {(rating / 10).toFixed(1)}
        </h6>
        <p className='text-sm mb-2 font-semibold text-gray-700'>Penilaian</p>
      </div>
    </motion.div>
  );
};

export default Stats;
