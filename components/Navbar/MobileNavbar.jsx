'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // For Next.js
import RegisterBtn from '../ui/RegisterBtn';

function MobileNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter(); // Using Next.js router

    // Scroll function to handle smooth scrolling
    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsMenuOpen(false); // Close the menu on link click
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

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="h-14 w-max-full fixed top-0 left-0 right-0 mx-8 my-4 border-[#16423c] border-[1px] rounded-[10px] z-40">

            <div className='h-full w-max-full flex justify-between items-center px-4 py-2 rounded-[10px]  backdrop-blur-lg '>
                {/* Logos */}
                <div className="flex justify-start items-center space-x-4">
                    <img src="/Logo/iemLogo.webp" alt="IEM Logo" className='h-10' />
                    <img src="/Logo/8.png" alt="Innovacion Logo" className='h-12' />
                </div>

                {/* Hamburger Icon */}
                <div className="z-50 cursor-pointer" onClick={toggleMenu}>
                    <div className={`w-6 h-0.5 bg-white mb-1 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-white mb-1 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
                </div>
            </div>

            {/* Fullscreen Menu Overlay */}
            <div
                className={`fixed top-18 w-[83.5%] backdrop-blur-lg rounded-[10px] transition-all duration-500 ease-in-out overflow-hidden z-50 ${isMenuOpen ? 'max-h-screen border-[#16423c] border-[1px]' : 'max-h-0'}`}
            >
                <div className="flex flex-col justify-center items-center h-full text-white space-y-6 font-[Megatrans] text-base py-10">
                    <span onClick={() => navigateToSection('/', 'homepage')} className="cursor-pointer" >Home</span>
                    <span onClick={() => navigateToSection('/', 'events')} className="cursor-pointer">Events</span>
                    <span onClick={() => navigateToSection('/', 'gallery')} className="cursor-pointer">Gallery</span>
                    <span onClick={() => navigateToSection('/', 'partners')} className="cursor-pointer">Partners</span>
                    <span onClick={() => navigateToSection('/', 'contact')} className="cursor-pointer">Contact</span>

                    {/* Register Button */}
                    <div className="pt-2">
                        <RegisterBtn text="Register" extraClass="h-[48px]" />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default MobileNavbar;
