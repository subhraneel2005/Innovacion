"use client"
import React from 'react'
import RegisterBtn from '../ui/RegisterBtn'
import StarryBackground from '../StarryBackground/StarryBackground'
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function Homepage() {
  const router = useRouter()

  const navigateToEventInfo = () => {
    router.push('/eventInfo')
  }
  return (
    <div id='homepage' className="h-screen w-full relative flex justify-center items-center flex-col">
      <StarryBackground extraClass="bg-[radial-gradient(circle_at_bottom,#16423C_0%,#000_100%)]" />
      <div className='z-10 text-center flex flex-col justify-center items-center'>
        <Image
          src="/Logo/logo.webp"
          alt=""
          className='w-32 md:w-64 mt-3 mb-4'
          loading='lazy'
          layout="intrinsic"
          width={256}
          height={64}
        />
        <h1 className="text-4xl md:text-7xl text-white font-[Ethnocentric] px-6">INNOVACIÓN</h1>
        <h1 className="text-4xl md:text-7xl text-white font-[Ethnocentric] px-6 mb-4">2025</h1>
      </div>
      <RegisterBtn text="Register" extraClass="h-[48px]" onClick={navigateToEventInfo} />
    </div>
  )
}

export default Homepage