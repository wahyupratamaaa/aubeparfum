import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import iconheader from '../assets/iconbanner.png';

const Header = () => {
  return (
    <div>
      <div className='relative isolate px-10 pt-14 lg:px-8'>
        <div
          className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          aria-hidden='true'
        >
          <div
            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className='mx-auto lg:max-w-2xl'>
          <div className='text-center'>
            {/* Text and Icon wrapped in flex for center alignment */}
            <span className='text-primary text-4xl font-semibold tracking-tight flex justify-center items-center gap-2'>
              Aube
              <img
                className='h-16 w-auto lg:block'
                src={iconheader}
                alt='brandlogo'
              />
            </span>
            <div className='flex flex-col gap-4'>
              <p className='flex justify-center mt-6 text-sm text-gray-700 font-medium lg:text-base'>
                <span className='w-4/6'>
                  Hadirkan Keharuman yang Menyegarkan, Ciptakan Suasana Nyaman
                  di Setiap Sudut Ruangan Anda!
                </span>
              </p>

              <div className='text-sm font-semibold flex items-center justify-center gap-3 leading-6 text-gray-700 hover:text-gray-500 duration-300 transition-colors'>
                <a
                  href='https://wa.me/6285231668872'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center btn'
                >
                  Kontak Whatsapp
                  <FaArrowRight className='ml-2' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
          aria-hidden='true'
        >
          <div
            className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
