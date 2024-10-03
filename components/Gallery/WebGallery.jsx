"use client";
import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import StarryBackground from '../StarryBackground/StarryBackground';

const images = [
  "/Gallery/01.webp",
  "/Gallery/02.webp",
  "/Gallery/03.webp",
  "/Gallery/04.webp",
  "/Gallery/05.webp",
  "/Gallery/06.webp",
  "/Gallery/07.webp",
  "/Gallery/08.webp",
  "/Gallery/09.webp",
  "/Gallery/10.webp",
  "/Gallery/11.webp",
  "/Gallery/12.webp",
  "/Gallery/13.webp",
  "/Gallery/14.webp",
  "/Gallery/15.webp",
  "/Gallery/16.webp",
  "/Gallery/17.webp",
  "/Gallery/18.webp",
  "/Gallery/19.webp",
  "/Gallery/20.webp",
  "/Gallery/21.webp",
  "/Gallery/22.webp",
  "/Gallery/23.webp",
  "/Gallery/24.webp",
  "/Gallery/25.webp",
  "/Gallery/26.webp",
  "/Gallery/27.webp",
];

const WebGallery = () => {
  const [currentIndexTop, setCurrentIndexTop] = useState(0);

  const handlersTop = useSwipeable({
    onSwipedLeft: () => handleNextTop(),
    onSwipedRight: () => handlePrevTop(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  useEffect(() => {
    const intervalTop = setInterval(handleNextTop, 2000);
    
    return () => {
      clearInterval(intervalTop);
    };
  }, [currentIndexTop]);

  const handleNextTop = () => {
    setCurrentIndexTop((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevTop = () => {
    setCurrentIndexTop((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='h-screen w-full relative md:flex md:flex-col hidden'>
      <StarryBackground extraClass={"z-10 -top-[72px] left-0 right-0 bottom-0 bg-[radial-gradient(circle_at_bottom,#000_0%,#000_100%)]"} />

      {/* Top Slider */}
      <div
        {...handlersTop}
        className="relative z-20 h-[60%] w-full overflow-hidden mx-auto px-2 md:px-10"
      >
        <h1 className='text-4xl md:text-[3.2rem] font-[Tasa-SemiBold] mt-10 mb-10 text-white text-center'>Gallery</h1>
        {/* Increased margin-bottom to mb-10 for more gap */}
        <div
          className="w-full gap-3 flex transition-transform duration-500 ease-in-out mt-28"
          style={{ transform: `translateX(-${currentIndexTop * 25}%)` }} // Show 4 images at once
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              loading='lazy'
              className="w-1/4 h-auto object-cover rounded-xl border-2 border-[#16423C] shadow-[0px_0px_20px_rgba(22,66,60,1)]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebGallery;
