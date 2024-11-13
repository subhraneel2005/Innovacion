import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';

function Footer() {
  return (
    <div className='relative -top-20  px-4 md:px-20 w-full flex flex-col lg:flex-row justify-between items-center'>
      <div className='flex flex-row items-center gap-10 mb-4'>
        <Image src="/Logo/iemLogo.webp" alt="iem logo" width={96} height={96} loading='lazy' className='md:w-32 md:h-32' />
        <Image src="/Logo/logo1.webp" alt="innovacion logo" width={96} height={96} loading='lazy' className='md:w-32 md:h-32' />
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
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.172998518342!2d88.43741480000001!3d22.572632100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275a90e337bc3%3A0x83415f007fc5f363!2sInstitute%20of%20Engineering%20and%20Management%20Block-GP!5e0!3m2!1sen!2sin!4v1731135929597!5m2!1sen!2sin" className='w-64 mt-6 md:mt-0 rounded-xl' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}

export default Footer;
