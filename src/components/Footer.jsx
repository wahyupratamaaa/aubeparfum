/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import iconheader from '../assets/iconbanner.png';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
  return (
    // <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
    <div className='p-6 mx-auto max-w-sm sm:max-w-xl md:max-w-full lg:max-w-screen-xl'>
      <div className='grid gap-16 row-gap-10 mb-8 lg:grid-cols-6'>
        <div className='md:max-w-md lg:col-span-2'>
          <Link
            to='/'
            aria-label='Go home'
            title='Company'
            className='inline-flex items-center'
          >
            {/* <img className='h-10 w-auto' src={brandimg} alt='brandlogo' /> */}
            <span className='text-primary text-4xl font-semibold tracking-tight flex justify-center items-center gap-2'>
              Aube
              <img
                className='h-16 w-auto lg:block'
                src={iconheader}
                alt='brandlogo'
              />
            </span>
          </Link>
          <div className='mt-4 lg:max-w-sm'>
            <p className='text-sm text-gray-700 leading-6'>
              Hadirkan Keharuman yang Menggugah di Setiap Ruangan, Ciptakan
              Suasana yang Membuat Setiap Momen Berharga!
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row'>
        <p className='text-sm text-gray-600'>
          © Copyright 2023 Headstart. All rights reserved.
        </p>
        <div className='flex items-center mt-4 space-x-4 sm:mt-0'>
          <a
            href='https://www.instagram.com/friendforyourvibes/'
            className='ml-4 text-gray-500 hover:text-[#e2457a] cursor-pointer text-2xl duration-300 transition-colors'
          >
            <RiInstagramFill />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
