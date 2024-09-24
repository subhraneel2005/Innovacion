"use client"
import React, { useState, useEffect } from 'react';
import StarryBackground from '../StarryBackground/StarryBackground';
import { MarqueeDemo } from "../Partners";
import MobileMedia from './MobileMedia';
import DesktopMedia from './DesktopMedia';

function MediaCoverage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id='partners' className="min-h-screen w-full rounded-[40px] relative z-20 -top-[120px] border-t-2 border-[#16423C] shadow-[0px_0px_20px_rgba(22,66,60,1)]">
      <StarryBackground extraClass={"z-10 top-0 left-0 right-0 bottom-0 rounded-[40px] bg-[radial-gradient(circle_at_bottom,#000_0%,#000_100%)]"} />

      <div className='relative z-20 m-8 md:mx-[164px] my-[80px] md:my-[100px] flex justify-center items-center flex-col'>
        <h2 className="text-4xl md:text-[3.2rem] font-[Tasa-SemiBold] mb-10 text-white text-center">Insights about Innovación</h2>
        {/* Render mobile or desktop version based on screen size */}
        {[0, 1, 2].map(index => (
          isMobile ? (
            <MobileMedia key={index} index={index} />  // Render mobile version
          ) : (
            <DesktopMedia key={index} index={index} /> // Render desktop version
          )
        ))}
      </div>


      <div className="w-full flex flex-col items-center justify-center relative z-20">
        <h2 className="text-4xl md:text-[3.2rem] text-gray-100 font-[Tasa-SemiBold] mb-4">Partners</h2>
        <MarqueeDemo />
      </div>
    </div>
  );
}

export default MediaCoverage;
