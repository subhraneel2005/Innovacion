import React from 'react';
import Marquee from "@/components/magicui/marquee";
import StarryBackground from '../StarryBackground/StarryBackground';
import Image from 'next/image';

import { galleryImagesData as images } from "./galleryImagesData.js"

const ReviewCard = ({ img }) => {
  return (
    <figure className="h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-80 lg:w-80 relative overflow-hidden rounded-xl mx-2 sm:mx-4 md:mx-6">
      <div className="flex items-center justify-center h-full w-full ease-in-out">
        <Image
          loading='lazy'
          src={img}
          alt="Gallery image"
          className="object-contain h-full w-full transition-transform duration-300 hover:scale-110"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </figure>
  );
};

function Gallery() {
  return (
    <div id='gallery' className='min-h-screen w-full relative flex flex-col'>
      <StarryBackground extraClass={"z-10 -top-[72px] left-0 right-0 bottom-0 bg-[radial-gradient(circle_at_bottom,#000_0%,#000_100%)]"} />

      <div className="relative z-30 h-full flex justify-center items-center flex-col w-full overflow-hidden mx-auto px-2 sm:px-4 md:px-6 lg:px-10 py-8 md:py-12">
        <h1 className='text-3xl md:text-[2.5rem] font-[Ethnocentric] text-white text-center'>Gallery</h1>
        <Marquee className="h-[60vh] sm:h-[70vh] w-full bg-transparent [--duration:300s] mb-4 z-30 flex items-center">
          {images.map((image, index) => (
            <ReviewCard key={index} img={image} />
          ))}
        </Marquee>
      </div>

    </div>
  );
}

export default Gallery;
