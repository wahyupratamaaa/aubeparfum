import { Link } from 'react-router-dom';
// import { FaAngleRight } from 'react-icons/fa';

//images
import brandicon from '../assets/iconaube.webp';

const NavBar = () => {
  return (
    <div className='bg-white '>
      <header className='absolute inset-x-0 top-0 z-50 '>
        <nav
          className='flex items-center justify-between p-6 lg:px-8'
          aria-label='Global'
        >
          <div className='flex lg:flex-1'>
            <Link to='/' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Headstart</span>
              <img
                className='h-16 w-auto lg:hidden'
                src={brandicon}
                alt='brandlogo'
              />
              <img
                className='hidden h-16 w-auto lg:block'
                src={brandicon}
                alt='brandlogo'
              />
            </Link>
          </div>
          <div className='flex lg:hidden'></div>
          <div className='hidden lg:flex lg:flex-1 lg:justify-end gap-2'>
            <a
              href='https://wa.me/6285231668872'
              className='btn'
              target='_blank'
              rel='noopener noreferrer'
            >
              Connect
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
