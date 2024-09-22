import React from 'react';
import Button from '../common/Button';

function MobileNav() {

  return (
    <div className='w-full md:hidden flex justify-center items-center'>
      <div className='h-[4.5rem] w-[80%] flex justify-between rounded-[10px] border-[#6A9C89] border-2 p-2 backdrop-blur-xl mt-4'>
        {/* Logos */}
        <div className='flex items-center max-w-[10rem]'>
          <img
            src={"/Logo/iemLogo.webp"}
            alt={"iemLogo"}
            className='h-full lg:mr-7'
          /> 
          <img
            src={"/Logo/innovacionLogo.webp"}
            alt={"InnovacionLogo"}
            className='h-full'
          />
        </div>

        {/* Register Button + Menu Icon */}
        <div className='cursor-pointer flex justify-center items-center'>
          <Button name={"Register"} color={"blue"}/>
        </div>
      </div>

    </div>
  );
}

export default MobileNav;
