import React from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import RegisterBtn from './RegisterBtn';
import Button from './common/Button';

function MobileNav() {

  return (
    <div className='w-full md:hidden flex justify-center items-center'>
      <div className='h-[4.5rem] w-[80%] flex justify-between rounded-[10px] border-[#6A9C89] border-2 p-2 backdrop-blur-xl mt-4'>
        {/* Logos */}
        <div className='flex items-center max-w-[10rem] pl-6'>
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
        <div className='flex items-center'>
        <div className='cursor-pointer mr-2'>
          <Button name={"Register"} color={"blue"}/>
        </div>

          <div className="menu-icon-container ml-4">
            <div>
              <span className="bar top"></span>
              <span className="bar middle"></span>
              <span className="bar bottom"></span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default MobileNav;
