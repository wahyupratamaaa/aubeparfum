import React from 'react';

const Banner = () => {
  return (
    <div className='mx-auto'>
      <div
        className='bg-cover bg-center h-auto text-white py-16 px-6 object-fill shadow-2xl rounded-2xl sm:rounded-3xl sm:px-20 sm:py-20'
        style={{
          backgroundImage:
            'url(https://dl.dropboxusercontent.com/scl/fi/1zf4tfj53xpuekmbbmqy4/promise6.png?rlkey=j69dizr3zuyx0der1sd56qjuc&dl=0)',
        }}
      >
        <div className='md:w-1/2'>
          <h2 className='title text-white'>
            Hadirkan Keharuman di Setiap Ruangan, Ciptakan Suasana Berharga
          </h2>
          <p className='mt-6 text-base leading-7 text-gray-300'>
            Hadirkan Keharuman yang Menggugah Selera di Setiap Ruangan, Ciptakan
            Suasana yang Menyentuh Hati!
          </p>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Banner;
