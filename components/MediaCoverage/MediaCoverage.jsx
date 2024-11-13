"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import StarryBackground from '../StarryBackground/StarryBackground';
import GradientBox from '../ui/GradientBox';
import RegisterBtn from '../ui/RegisterBtn';
import Image from 'next/image';

function MediaCoverage() {
  const router = useRouter();

  const handleReadMore = () => {
    router.push('/media');
  };

  return (
    <div id='insights' className="min-h-screen w-full rounded-[40px] relative z-20 -top-[120px] border-y-2 border-[#16423C] shadow-[0px_0px_20px_rgba(22,66,60,1)]">
      <StarryBackground extraClass={"z-10 top-0 left-0 right-0 bottom-0 rounded-[40px] bg-[radial-gradient(circle_at_bottom,#000_0%,#000_100%)]"} />

      <div className='relative z-20 m-8 md:mx-[164px] my-[80px] md:my-[100px] flex justify-center items-center flex-col'>
        <h2 className="text-3xl md:text-[2.5rem] font-[Ethnocentric] mb-16 text-white text-center">Insights about Innovación</h2>
        <GradientBox extraClass='w-full h-full flex justify-between items-center flex-col'>
          <div className='w-full h-full flex justify-between gap-6 md:items-center md:flex-row flex-col items-center'>
            <Image src="/Insights/1.jpeg" alt="1" width={300} height={200} className='h-72 md:w-1/3 rounded-xl' loading='lazy' />
            <Image src="/Insights/2.jpeg" alt="2" width={300} height={200} className='h-72 md:w-1/3 rounded-xl my-4 md:my-0' loading='lazy' />
            <Image src="/Insights/3.jpeg" alt="3" width={300} height={200} className='h-72 md:w-1/3 rounded-xl' loading='lazy' />
          </div>
          <RegisterBtn text="Read More" extraClass="mt-6 md:h-[48px]" onClick={handleReadMore} />

        </GradientBox>
      </div>
    </div>
  );
}

export default MediaCoverage;
