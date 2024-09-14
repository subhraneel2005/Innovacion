import React from 'react'
import RegisterBtn from './RegisterBtn'
import StarryBackground from './StarryBackground/StarryBackground'

function Homepage() {
  return (
    // Home page
    <div id='homepage' className="h-screen flex justify-center items-center flex-col pb-36 lg:mx-40 lg:py-5">
      <StarryBackground extraClass="bg-[radial-gradient(circle_at_bottom,#16423C_0%,#000_100%)]" />
      {/* <StarryBackground /> */}
      <h1 className="text-7xl text-white font-[Quantum] pb-9">INNOVACIÓN 2025</h1>
      <RegisterBtn />
    </div>
  )
}

export default Homepage