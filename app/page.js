"use client"
import React, { useState, useEffect } from 'react';

import Loader from '@/components/Loader/Loader';
import MobileNavbar from "@/components/Navbar/MobileNavbar";
import DesktopNavbar from "@/components/Navbar/DesktopNavbar";
import HomePage from "@/components/HomePage/Homepage";
import Events from "@/components/Events/Events";
import Gallery from "@/components/Gallery/Gallery";
import MediaCoverage from "@/components/MediaCoverage/MediaCoverage";
import PartnersSlide from "@/components/Partners/PartnersSlide";
import Footer from "@/components/Footer/Footer";

// Custom hook to get window width
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

export default function Home() {
  const [isLoaderComplete, setIsLoaderComplete] = useState(false);
  const [shouldShowLoader, setShouldShowLoader] = useState(true);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    const hasNavigatedBack = sessionStorage.getItem('hasNavigatedBack');
    if (hasNavigatedBack) {
      setShouldShowLoader(false);
      setIsLoaderComplete(true);
      sessionStorage.removeItem('hasNavigatedBack');
    }
  }, []);

  const handleLoaderComplete = () => {
    setIsLoaderComplete(true);
  };

  // Define the breakpoint for mobile/desktop
  const isMobile = windowWidth < 1080; // Adjust this value as needed

  return (
    <div className="select-none">
      {/* Video Loader */}
      {shouldShowLoader && <Loader onLoadComplete={handleLoaderComplete} />}

      {/* Main Content */}
      <div className={`main-content ${!isLoaderComplete ? 'overflow-hidden h-screen' : ''}`}>
        {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
        <HomePage />
        <Events />
        <Gallery />
        <MediaCoverage />
        <PartnersSlide />
        <Footer />
      </div>
    </div>
  );
}
