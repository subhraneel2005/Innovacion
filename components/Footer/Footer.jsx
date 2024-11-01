import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <div className='relative -top-20  px-4 lg:px-40 md:px-20 w-full flex flex-col md:flex-row justify-between items-center'>
      <div className='flex flex-row items-center gap-10 mb-4'>
        <img src="/Logo/iemLogo.webp" alt="iem logo" className='w-24 h-24 md:w-32 md:h-32' />
        <img src="/Logo/8.png" alt="innovacion logo" className='w-24 h-24 md:w-32 md:h-32' />
      </div>

      <div className='text-center md:text-left text-xs text-gray-400 font-[Tasa-Regular] mb-4 md:my-0'>
        © Copyright INNOVACIÓN 2025. All Rights Reserved
      </div>

      {/* Icons */}
      <div className='flex gap-3 mt-3 md:mt-0'>
        <a href="https://youtube.com/@ieminnovacion?si=UaehSHNNem0cjNwL" target="_blank" rel="noopener noreferrer" className='transition-transform duration-300 hover:scale-110'>
          <FaYoutube className='text-gray-500 hover:text-red-500 text-xl md:text-2xl' />
        </a>
        <a href="https://www.linkedin.com/in/iem-innovación-31183a32b" target="_blank" rel="noopener noreferrer" className='transition-transform duration-300 hover:scale-110'>
          <FaLinkedin className='text-gray-500 hover:text-blue-600 text-xl md:text-2xl' />
        </a>
        <a href="https://www.instagram.com/ieminnovacion?igsh=MWoxcWNuMmdzeHJleA==" target="_blank" rel="noopener noreferrer" className='transition-transform duration-300 hover:scale-110'>
          <FaInstagram className='text-gray-500 hover:text-pink-400 text-xl md:text-2xl' />
        </a>
        <a href="https://www.facebook.com/share/aqpwFthLMk8fLgqh/" target="_blank" rel="noopener noreferrer" className='transition-transform duration-300 hover:scale-110'>
          <FaFacebook className='text-gray-500 hover:text-blue-600 text-xl md:text-2xl' />
        </a>
      </div>
    </div>
  );
}

export default Footer;
