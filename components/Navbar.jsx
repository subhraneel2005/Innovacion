import React from 'react'
import RegisterBtn from './RegisterBtn'

function Navbar() {
  return (
    <div className='h-[4.5rem] w-max-full flex justify-between rounded-[10px] border-[#6A9C89] border-2 p-2 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 lg:mx-40 lg:my-5'>
      <div className='text-md text-white flex items-center font-[Tasa-SemiBold]'>
        <span className='lg:mr-5 lg:ml-5'>Home</span>
        <span className='lg:mr-5'>Event</span>
        <span className='lg:mr-5'>Gallery</span>
        <span className='lg:mr-5'>Partners</span>
        <span>Contact Us</span>
      </div>

      <div className='flex'>
        <img src="/public/iemLogo.webp" alt="iemLogo" className='lg:mr-7' />
        <img src="/public/innovacionLogo.webp" alt="InnovacionLogo" />
      </div>

      <RegisterBtn />
    </div>
  )
}

export default Navbar