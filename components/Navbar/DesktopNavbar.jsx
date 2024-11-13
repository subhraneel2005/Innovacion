'use client'

import React from 'react';
import { useRouter } from 'next/navigation'; // For Next.js
import RegisterBtn from '../ui/RegisterBtn';
import Image from 'next/image'; // {{ edit_1 }}

function DesktopNavbar() {
  const router = useRouter(); // Using Next.js router

  // Scroll function to handle smooth scrolling
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Function to handle navigation to homepage or other routes
  const navigateToSection = (route, sectionId) => {
    if (router.pathname !== route) {
      router.push(route); // Navigate to the route
      setTimeout(() => handleScroll(sectionId), 100); // Wait and then scroll to the section
    } else {
      handleScroll(sectionId); // Direct scroll if already on the correct route
    }
  };

  const navigateToContactUsPage = () => {
    router.push('/contactUs');
  }

  const navigateToEventInfo = () => {
    router.push('/eventInfo')
  }

  return (
    <div className="flex justify-between items-center px-4 py-2 md:px-8 md:py-2 h-14 md:h-[4.5rem] w-max-full fixed top-0 left-0 right-0 bg-opacity-70 backdrop-blur-xl border-[#16423c] border-[1px] rounded-[10px] z-40 mx-[52px] my-3 md:mx-40 md:my-5">

      {/* Logos */}
      <div className="flex justify-start items-center space-x-4 md:space-x-6">
        <Image src="/Logo/iemLogo.webp" alt="IEM Logo" className='h-8 md:h-12 lg:h-14' width={80} height={80} />
        <Image src="/Logo/logo1.webp" alt="Innovacion Logo" className='h-14 md:h-20 lg:h-20' width={80} height={80} />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-center flex-1 space-x-5 lg:space-x-8 text-white font-[Megatrans]">
        <span onClick={() => navigateToSection('/', 'homepage')} className='cursor-pointer'>Home</span>
        <span onClick={() => navigateToSection('/', 'events')} className='cursor-pointer'>Events</span>
        <span onClick={() => navigateToSection('/', 'gallery')} className='cursor-pointer'>Gallery</span>
        <span onClick={() => navigateToSection('/', 'partners')} className='cursor-pointer'>Partners</span>
        <span onClick={navigateToContactUsPage} className='cursor-pointer'>Contact Us</span>
      </div>

      {/* Register Button */}
      <div className="hidden md:flex h-full">
        <RegisterBtn text="Register" extraClass="h-full" onClick={navigateToEventInfo} />
      </div>

    </div>
  );
}

export default DesktopNavbar;
