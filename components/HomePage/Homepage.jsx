"use client"
import React from 'react'
import RegisterBtn from '../RegisterBtn'
import StarryBackground from '../StarryBackground/StarryBackground'

function HomepageLarge() {
  return (
    <div id='homepage' className="min-h-screen w-full flex justify-center items-center flex-col">
      <StarryBackground extraClass="bg-[radial-gradient(circle_at_bottom,#16423C_0%,#000_100%)]" />
      <div className='z-10 text-center pb-4'>
        <h1 className="text-4xl md:text-7xl text-white font-[Quantum] px-6">INNOVACIÓN</h1>
        <h1 className="text-4xl md:text-7xl text-white font-[Quantum] px-6">2025</h1>
      </div>
      <RegisterBtn />
    </div>
  )
}

export default HomepageLarge