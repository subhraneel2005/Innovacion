import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <div className='relative -top-[40px] px-4 md:px-12 w-full flex flex-col md:flex-row justify-between items-center mb-10'>
      <div className='flex flex-col md:flex-row items-center gap-3'>
        <img src="/Logo/iemLogo.webp" alt="iem logo" className='w-24 h-24 md:w-32 md:h-32' />
        <img src="/Logo/innovacionLogo.webp" alt="innovacion logo" className='w-24 h-24 md:w-32 md:h-32' />
      </div>

      <div className='text-center md:text-left text-[15px] text-gray-200 font-[Tasa-Regular] my-2 md:my-0'>
        © Copyright INNOVACIÓN 2025. All Rights Reserved
      </div>

      {/* Icons */}
      <div className='flex gap-3 mt-3 md:mt-0'>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='transition-transform duration-300 hover:scale-110'>
          <FaTwitter className='text-gray-500 hover:text-blue-400 text-xl md:text-2xl' />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='transition-transform duration-300 hover:scale-110'>
          <FaLinkedin className='text-gray-500 hover:text-blue-600 text-xl md:text-2xl' />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='transition-transform duration-300 hover:scale-110'>
          <FaInstagram className='text-gray-500 hover:text-pink-400 text-xl md:text-2xl' />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='transition-transform duration-300 hover:scale-110'>
          <FaFacebook className='text-gray-500 hover:text-blue-600 text-xl md:text-2xl' />
        </a>
      </div>
    </div>
  );
}

export default Footer;
