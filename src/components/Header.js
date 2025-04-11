import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className='flex justify-between items-center px-5 py-4 bg-black shadow-md'>
      {/* Logo */}
      <a className='font-bold text-white text-lg' href='#'>Chinnathambi C</a>

      {/* Desktop Navigation */}
      <nav className='hidden md:block'>
        <ul className='flex space-x-6 text-white font-medium'>
          <li><a href='/' className='hover:text-gray-300'>Home</a></li>
          <li><a href='#about' className='hover:text-gray-300'>About</a></li>
          <li><a href='#project' className='hover:text-gray-300'>Projects</a></li>
          <li><a href='#resume' className='hover:text-gray-300'>Resume</a></li>
          <li><a href='#contact' className='hover:text-gray-300'>Contact</a></li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      {toggleMenu && (
        <nav className='absolute top-16 left-0 w-full bg-black md:hidden z-50'>
          <ul 
            onClick={() => setToggleMenu(false)} 
            className='flex flex-col text-white font-medium px-5 py-4 space-y-3'
          >
            <li><a href='/' className='hover:text-gray-300'>Home</a></li>
            <li><a href='#about' className='hover:text-gray-300'>About</a></li>
            <li><a href='#project' className='hover:text-gray-300'>Projects</a></li>
            <li><a href='#resume' className='hover:text-gray-300'>Resume</a></li>
            <li><a href='#contact' className='hover:text-gray-300'>Contact</a></li>
          </ul>
        </nav>
      )}

      {/* Mobile Menu Icon */}
      <button 
        onClick={() => setToggleMenu(!toggleMenu)} 
        className='block md:hidden focus:outline-none'
      >
        <Bars3Icon className='text-white h-6 w-6' />
      </button>
    </header>
  );
};

export default Header;
