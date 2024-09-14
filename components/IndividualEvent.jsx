'use client'

import {useState} from 'react'
import GradientBox from './GradientBox'
import StarryBackground from './StarryBackground/StarryBackground'
import { Data } from './EventsData'
import { FaLongArrowAltRight } from "react-icons/fa";

function IndividualEvent() {

    const [selectedEvent, setSelectedEvent] = useState(Data[0]);

    const changeEventHandler = (event) => {
        setSelectedEvent(event);
    }

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center rounded-[40px] relative z-10 -top-[40px] border-2 border-[#16423C] lg:px-[108px] shadow-[0px_0px_20px_rgba(22,66,60,1)]" >
         <StarryBackground extraClass={"z-10 top-0 left-0 right-0 bottom-0 rounded-[40px] bg-[radial-gradient(circle_at_bottom,#000_0%,#000_100%)]"} />
            <ul className='w-[1000px] justify-evenly gap-6 flex items-center'>
                {Data.map((e) => (
                <li
                 key={e.id}
                 onMouseEnter={() => changeEventHandler(e)}
                 onClick={() => changeEventHandler(e)}
                 className='cursor-pointer text-gray-100 flex justify-center items-center px-4 py-2 text-2xl hover:border border-[#16423C] hover:rounded-[10px] transition duration-300'>
                    {e.title}
                </li>
                ))}
            </ul>

        <GradientBox>
            <div className='w-[1000px] h-full flex items-center justify-center'>
                <div className='flex flex-col justify-start items-start'>
                    <h2 className='text-[3.2rem] font-[Tasa-SemiBold] mb-4 text-center text-white'>{selectedEvent.title}</h2>
                    <p className="text-base font-[Tasa-Regular] leading-6 text-gray-300 text-left max-w-[582px]">{selectedEvent.description}</p>
                    
                    <div className='gap-5 mt-20 justify-between items-center flex'>
                        <button className='px-4 py-2 rounded-[10px] bg-[#16423C] text-white flex justify-center items-center text-[16px]'>Register <FaLongArrowAltRight size={20}/></button>
                        <button className='bg-[#6A9C89] px-4 py-2 rounded-[10px] text-white'>Download Rules</button>
                    </div>
                </div>
                <img src={selectedEvent.src} alt={selectedEvent.title} className='w-[330px] h-[330px] rounded-[10px]' />
            </div>
        </GradientBox>
    </div>
  )
}

export default IndividualEvent