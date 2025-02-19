import React from 'react';

const WhyUs = () => {
  const products = [
    {
      src: 'https://down-id.img.susercontent.com/file/id-11134207-7rask-m4wl90eloql4a3@resize_w900_nl.webp',
      title: 'Aube Aroma Ocean',
      linkshoppe:
        'https://shopee.co.id/Pengharum-Ruangan-Reed-Diffuser-Aube-Aroma-Ocean-Tahan-Lama-Murah-Wangi-Estetik-Mewah-dan-Viral-i.243631135.29073303414',
    },
    {
      src: 'https://down-id.img.susercontent.com/file/id-11134207-7ras9-m4uh0754p2w800@resize_w900_nl.webp',
      title: 'Aube Aroma Lavender',
      linkshoppe:
        'https://shopee.co.id/Pengharum-Ruangan-Reed-Diffuser-Aube-Aroma-Lavender-Tahan-Lama-dan-Murah-Wangi-Estetik-i.243631135.26523210161',
    },
    {
      src: 'https://down-id.img.susercontent.com/file/id-11134207-7rasl-m4wl90elgbcyc0@resize_w900_nl.webp',
      title: 'Aube Aroma Jasmine',
      linkshoppe:
        'https://shopee.co.id/Pengharum-Ruangan-Reed-Diffuser-Aube-Aroma-Jasmine-Tahan-Lama-Murah-Wangi-Estetik-dan-Viral-i.243631135.27323295858',
    },
    {
      src: 'https://down-id.img.susercontent.com/file/id-11134207-7rask-m4wl90elhpqw81@resize_w900_nl.webp',
      title: 'Aube Aroma Vanila',
      linkshoppe:
        'https://shopee.co.id/Pengharum-Ruangan-Reed-Diffuser-Aube-Aroma-Vanila-Tahan-Lama-Murah-Wangi-Estetik-Mewah-dan-Viral-i.243631135.24690405371',
    },
    {
      src: 'https://down-id.img.susercontent.com/file/id-11134207-7rask-m4wl90eloql4a3@resize_w900_nl.webp',
      title: 'Aube Aroma Ocean',
      linkshoppe:
        'https://shopee.co.id/Pengharum-Ruangan-Reed-Diffuser-Aube-Aroma-Ocean-Tahan-Lama-Murah-Wangi-Estetik-Mewah-dan-Viral-i.243631135.29073303414',
    },
    {
      src: 'https://down-id.img.susercontent.com/file/id-11134207-7ras9-m4uh0754p2w800@resize_w900_nl.webp',
      title: 'Aube Aroma Lavender',
      linkshoppe:
        'https://shopee.co.id/Pengharum-Ruangan-Reed-Diffuser-Aube-Aroma-Lavender-Tahan-Lama-dan-Murah-Wangi-Estetik-i.243631135.26523210161',
    },
    {
      src: 'https://down-id.img.susercontent.com/file/id-11134207-7rasl-m4wl90elgbcyc0@resize_w900_nl.webp',
      title: 'Aube Aroma Jasmine',
      linkshoppe:
        'https://shopee.co.id/Pengharum-Ruangan-Reed-Diffuser-Aube-Aroma-Jasmine-Tahan-Lama-Murah-Wangi-Estetik-dan-Viral-i.243631135.27323295858',
    },
    {
      src: 'https://down-id.img.susercontent.com/file/id-11134207-7rask-m4wl90elhpqw81@resize_w900_nl.webp',
      title: 'Aube Aroma Vanila',
      linkshoppe:
        'https://shopee.co.id/Pengharum-Ruangan-Reed-Diffuser-Aube-Aroma-Vanila-Tahan-Lama-Murah-Wangi-Estetik-Mewah-dan-Viral-i.243631135.24690405371',
    },
    {
      src: 'https://down-id.img.susercontent.com/file/id-11134207-7ras9-m4uh0754p2w800@resize_w900_nl.webp',
      title: 'Aube Aroma Lavender',
      linkshoppe:
        'https://shopee.co.id/Pengharum-Ruangan-Reed-Diffuser-Aube-Aroma-Lavender-Tahan-Lama-dan-Murah-Wangi-Estetik-i.243631135.26523210161',
    },
  ];

  return (
    <div>
      <div className='flex flex-wrap -mx-4'>
        <div className='w-full px-4'>
          <div className='mx-auto mb-12 max-w-[510px] text-center lg:mb-20'>
            <h2 className='mb-4 title'>Product</h2>
          </div>
        </div>
      </div>
      <div className='grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3'>
        {products.map((product, index) => (
          <div
            key={index}
            className={`p-8 border-b ${index % 3 !== 2 ? 'sm:border-r' : ''} ${
              index >= 6 ? 'lg:border-r-0' : ''
            } relative group`}
          >
            <a
              href={product.linkshoppe}
              target='_blank'
              rel='noopener noreferrer'
              className='relative overflow-hidden block rounded-xl'
            >
              <img
                src={product.src}
                alt={product.title}
                className='h-auto transition-transform duration-300 transform group-hover:scale-110'
              />
              <div className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 text-white text-lg font-medium transition-all duration-500 transform group-hover:scale-105 group-hover:translate-y-2'>
                {product.title}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
