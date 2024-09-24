'use client'

import React from 'react';
import Button from '../common/Button';
import RegisterBtn from '../RegisterBtn';

function Navbar() {
  // Scroll function to handle smooth scrolling
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className='h-[4.5rem] w-max-full hidden md:flex justify-between rounded-[10px] border-[#6A9C89] border-2 p-2 backdrop-blur-xl fixed top-0 left-0 right-0 z-50 lg:mx-40 lg:my-5'>
      <div className='text-md text-white flex items-center font-[Tasa-SemiBold]'>
        <span onClick={() => handleScroll('homepage')} className='lg:mr-5 lg:ml-5 cursor-pointer'>Home</span>
        <span onClick={() => handleScroll('events')} className='lg:mr-5 cursor-pointer'>Events</span>
        <span onClick={() => handleScroll('gallery')} className='lg:mr-5 cursor-pointer'>Gallery</span>
        <span onClick={() => handleScroll('partners')} className='lg:mr-5 cursor-pointer'>Partners</span>
        <span onClick={() => handleScroll('contact')} className='cursor-pointer'>Contact Us</span>
      </div>

      <div className='flex justify-center max-w-[10rem]'>
        <img src="/Logo/iemLogo.webp" alt="iemLogo" className='h-full lg:mr-7' />
        <img src="/Logo/innovacionLogo.webp" alt="InnovacionLogo" className='h-full' />
      </div>

      <RegisterBtn />
    </div>
  );
}

export default Navbar;
