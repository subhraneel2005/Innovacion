"use client"
import React from 'react'
import RegisterBtn from '../RegisterBtn'
import StarryBackground from '../StarryBackground/StarryBackground'

function Homepage() {
  return (
    <div id='homepage' className="h-screen w-full relative flex justify-center items-center flex-col">
      <StarryBackground extraClass="bg-[radial-gradient(circle_at_bottom,#16423C_0%,#000_100%)]" />
      <div className='z-10 text-center pb-4'>
        <h1 className="text-4xl md:text-7xl text-white font-[Ethnocentric] px-6">INNOVACIÓN</h1>
        <h1 className="text-4xl md:text-7xl text-white font-[Ethnocentric] px-6">2025</h1>
      </div>
      <RegisterBtn text="Register" extraClass="h-[48px]" />
    </div>
  )
}

export default Homepage