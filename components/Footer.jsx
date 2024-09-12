import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <div className='py-12 px-4 w-full flex justify-evenly items-center'>
      <div className='flex gap-3'>
        <img src="/iemLogo.webp" alt="iem logo" className='w-[115px] h-[80px]' />
        <img src="/innovacionLogo.webp" alt="innovacion logo" className='w-[100px] h-[70px]' />
      </div>

      <div className='text-[15px] text-gray-200'>© Copyright INNOVACIÓN 2024. All Rights Reserved</div>
      
      {/* Icons */}
      <div className='flex gap-3'>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='transition-transform duration-300 hover:scale-110'>
          <FaTwitter className='text-gray-500 hover:text-blue-400 text-2xl' />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='transition-transform duration-300 hover:scale-110'>
          <FaLinkedin className='text-gray-500 hover:text-blue-600 text-2xl' />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='transition-transform duration-300 hover:scale-110'>
          <FaInstagram className='text-gray-500 hover:text-pink-400 text-2xl' />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='transition-transform duration-300 hover:scale-110'>
          <FaFacebook className='text-gray-500 hover:text-blue-600 text-2xl' />
        </a>
      </div>
    </div>
  );
}

export default Footer;