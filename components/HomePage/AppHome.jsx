import React from 'react'
import RegisterBtn from '../RegisterBtn'
import StarryBackground from '../StarryBackground/StarryBackground'

function AppHome() {
  return (
    <div id='homepage' className="min-h-[660px] w-full md:hidden flex justify-center items-center flex-col">
      <StarryBackground extraClass="bg-[radial-gradient(circle_at_bottom,#16423C_0%,#000_100%)]" />
      {/* <StarryBackground /> */}
      <div className=' flex-col justify-center items-center space-y-9'>
        <h1 className="text-2xl text-white font-[Quantum]">INNOVACIÓN</h1>
        <div className='w-full flex justify-center'> 
          <RegisterBtn />  
        </div>
        
      </div>
    </div>
  )
}

export default AppHome