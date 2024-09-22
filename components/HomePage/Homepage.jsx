import React from 'react'
import RegisterBtn from '../RegisterBtn'
import StarryBackground from '../StarryBackground/StarryBackground'

function HomepageLarge() {
  return (
    <div id='homepage' className="min-h-screen w-full hidden md:flex justify-center items-center flex-col">
      <StarryBackground extraClass="bg-[radial-gradient(circle_at_bottom,#16423C_0%,#000_100%)]" />
      {/* <StarryBackground /> */}
      <h1 className="text-2xl md:text-7xl text-white font-[Quantum] px-6">INNOVACIÓN 2025</h1>
      <RegisterBtn />
    </div>
  )
}

export default HomepageLarge