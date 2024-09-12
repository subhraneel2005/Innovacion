import React from 'react'
import RegisterBtn from './RegisterBtn'
import StarryBackground from './StarryBackground/StarryBackground'

function Homepage() {
  return (
    // Home page
    <div className="h-screen flex justify-center items-center flex-col pb-36 lg:mx-40 lg:py-5">
      <StarryBackground extraClass="bg-[radial-gradient(circle_at_bottom,#16423C_0%,#000_100%)]" />
      {/* <StarryBackground /> */}
      <h1 className="text-8xl text-white font-[Quantum] pb-11">INNOVACIÓN</h1>
      <RegisterBtn />
    </div>
  )
}

export default Homepage