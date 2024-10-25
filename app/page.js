"use client"
import React, { useState, useEffect } from 'react';
import Events from "@/components/Events";
import MediaCoverage from "@/components/MediaCoverage/MediaCoverage";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage/Homepage";
import DesktopNavbar from "@/components/HomePage/DesktopNavbar";
import MobileNavbar from "@/components/HomePage/MobileNavbar";
import Gallery from "@/components/Gallery/Gallery";
import PartnersSlide from "@/components/PartnersSlide";
import Loader from '@/components/Loader/Loader';

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
