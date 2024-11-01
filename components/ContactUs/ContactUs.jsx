"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import StarryBackground from '../StarryBackground/StarryBackground'
import MobileNavbar from '../Navbar/MobileNavbar'
import DesktopNavbar from '../Navbar/DesktopNavbar'
import ContactCard from './ContactCard'

import { ContactData } from "./ContactData"

const ContactUs = () => {
    const useWindowWidth = () => {
        const [windowWidth, setWindowWidth] = useState(
            typeof window !== 'undefined' ? window.innerWidth : 0
        );

        useEffect(() => {
            if (typeof window !== 'undefined') {
                const handleResize = () => setWindowWidth(window.innerWidth);
                window.addEventListener('resize', handleResize);
                return () => window.removeEventListener('resize', handleResize);
            }
        }, []);

        return windowWidth;
    };

    const windowWidth = useWindowWidth();

    const isMobile = windowWidth < 768;

    useEffect(() => {
        return () => {
            // This will run when the component is unmounted (i.e., when navigating away)
            sessionStorage.setItem('hasNavigatedBack', 'true');
        };
    }, []);

    return (
        <div className='min-h-screen w-full flex flex-col items-center relative select-none md:px-[108px]'>
            <StarryBackground extraClass={"z-10 top-0 left-0 right-0 bottom-0 bg-[radial-gradient(circle_at_bottom,#000_0%,#000_100%)]"} />
            {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
            <h1 className='text-3xl md:text-[2.5rem] font-[Ethnocentric] text-white text-center pt-[100px] pb-[30px] md:pt-[130px] md:pb-[40px] relative z-20'>Contact Us</h1>

            <div className='grid grid-rows-1 md:grid-cols-2 gap-x-6 mx-[50px] relative z-20'>
                {ContactData.map((contact) => (
                    <ContactCard profilePic={contact.profilePic} name={contact.name} department={contact.department} phnNo={contact.phnNo} />
                ))}
            </div>

        </div>
    )
}

export default ContactUs