'use client'

import { useState } from 'react';
import GradientBox from './GradientBox';
import StarryBackground from './StarryBackground/StarryBackground';
import { Data } from './EventsData';
import { FaLongArrowAltRight } from "react-icons/fa"; 
import RegisterBtn from './RegisterBtn';
import { useSearchParams } from 'next/navigation';

function IndividualEvent() {
    const searchParams = useSearchParams(); 
    const eventId = searchParams.get('id');
    const [selectedEventIndex, setSelectedEventIndex] = useState(eventId-1);
    const [subEventIndex, setSubEventIndex] = useState(0);

    const changeEventHandler = (index) => {
        setSelectedEventIndex(index);
        setSubEventIndex(0); // Reset sub-event index when changing main event
    }

    const currentEvent = Data[selectedEventIndex];
    const currentSubEvents = currentEvent ? currentEvent.subEvents : [];

    const nextSubEvent = () => {
        if (subEventIndex < currentSubEvents.length - 1) {
            setSubEventIndex(subEventIndex + 1);
        }
    };

    const prevSubEvent = () => {
        if (subEventIndex > 0) {
            setSubEventIndex(subEventIndex - 1);
        }
    };

    return (
        <div className="h-screen w-full flex flex-col items-center ">
            <StarryBackground extraClass={"z-10 top-0 left-0 right-0 bottom-0 bg-[radial-gradient(circle_at_bottom,#000_0%,#000_100%)]"} />

            <h1 className='text-4xl md:text-[3.2rem] font-[Tasa-SemiBold] text-white text-center md:py-[80px] relative z-20'>Register Now</h1>
            {/* Tabs for Events */}
            <div className="flex space-x-4 mb-6 relative z-20">
                {Data.map((event, index) => (
                    <button
                        key={event?.id}
                        onClick={() => changeEventHandler(index)}
                        className={`px-4 py-2 rounded ${selectedEventIndex === index ? 'border-[1px] border-[#16423c] shadow-[0px_0px_20px_rgba(22,66,60,1)]' : 'border-none'}`}>
                        {event?.title}
                    </button>
                ))}
            </div>

            {/* Slider for Sub-Events */}
            <div className="flex justify-center items-center w-full relative z-20">
                <button onClick={prevSubEvent} disabled={subEventIndex === 0} className="px-4 py-2 rounded border-[1px] border-[#16423c] shadow-[0px_0px_20px_rgba(22,66,60,1)]">Previous</button>

                <div className="flex flex-col overflow-hidden h-full w-1/2 mx-2">
                    <GradientBox extraClass="w-full m-0">
                        <div className='h-full flex flex-row justify-between items-start '>
                            <div className='h-full flex flex-col justify-between'>
                                <div className='flex flex-col'>
                                    <h2 className='text-4xl font-[Tasa-SemiBold] mb-2 text-white'>{currentSubEvents[subEventIndex]?.title}</h2>
                                    <p className="text-base font-[Tasa-Regular] leading-6 text-gray-300 text-left">{currentSubEvents[subEventIndex]?.description}</p>
                                </div>
                                <div className='gap-5 mt-2 justify-between items-center flex'>
                                    <RegisterBtn />
                                    <button className='h-[50px] md:h-[52px] z-10 font-[Tasa-SemiBold] rounded-xl text-white bg-[#6A9C89] hover:bg-[#032221] px-4'>Download Rules</button>
                                </div>
                            </div>

                            <img src={currentSubEvents[subEventIndex]?.src} alt={currentSubEvents[subEventIndex]?.title} className='h-[300px] rounded-xl p-8' />

                        </div>
                    </GradientBox>
                    {/* Dotted Indicator */}
                    <div className="flex justify-center pt-4">
                        {currentSubEvents.map((_, index) => (
                            <div key={index} className={`w-2 h-2 rounded-full mx-1 ${subEventIndex === index ? 'bg-white' : 'bg-gray-400'}`} />
                        ))}
                    </div>
                </div>

                <button onClick={nextSubEvent} disabled={subEventIndex === currentSubEvents.length - 1} className="px-4 py-2 rounded border-[1px] border-[#16423c] shadow-[0px_0px_20px_rgba(22,66,60,1)]">Next</button>
            </div>
        </div>
    )
}

export default IndividualEvent