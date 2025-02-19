import React from 'react';

const Features = () => {
  const features = [
    {
      name: 'Shoppe',
      link: 'https://shopee.co.id/aubeessence', // External link
      imageSrc: '/shoppe.jpeg',
      altText: 'Shoppe Logo',
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/friendforyourvibes/', // External link
      imageSrc: '/instagram.png',
      altText: 'Instagram Logo',
    },
  ];

  return (
    <div>
      <div className='max-w-xl text-center mx-auto lg:max-w-2xl mb-12'>
        <h2 className='mb-6'>
          <span className='relative inline-block'>
            <svg
              viewBox='0 0 52 24'
              fill='currentColor'
              className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
            >
              <defs>
                <pattern
                  id='903f4a9e-7ac3-441c-9613-04c15fcc0a14'
                  x='0'
                  y='0'
                  width='.135'
                  height='.30'
                >
                  <circle cx='1' cy='1' r='.7' />
                </pattern>
              </defs>
              <rect
                fill='url(#903f4a9e-7ac3-441c-9613-04c15fcc0a14)'
                width='52'
                height='24'
              />
            </svg>
            <span className='relative text-primary title'>Platform</span>
          </span>
        </h2>
      </div>
      <div className='flex flex-wrap mx-auto md:max-w-xl lg:max-w-screen-xl justify-center'>
        {features.map((feature, index) => (
          <div key={index} className='mt-10 px-2 w-1/2 lg:w-1/6 cursor-pointer'>
            <a href={feature.link} target='_blank' rel='noopener noreferrer'>
              <div className='mb-2 rounded-[20px] bg-white p-5 shadow-md md:px-2 xl:px-5'>
                <div className='mb-6 flex h-[60px] w-[60px] p-3 items-center justify-center rounded-2xl bg-primary'>
                  <img
                    src={feature.imageSrc}
                    alt={feature.altText}
                    className='rounded-lg'
                  />
                </div>
                <h4 className='text-sm sm:text-base mb-2 font-semibold text-primary'>
                  <p>{feature.name}</p>
                </h4>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
