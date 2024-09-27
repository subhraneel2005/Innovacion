'use client'

import { useState } from 'react';
import GradientBox from './GradientBox';
import StarryBackground from './StarryBackground/StarryBackground';
import { Data } from './EventsData';
import RegisterBtn from './RegisterBtn';
import { useSearchParams } from 'next/navigation';
import NewAppNavCodepen from './HomePage/NewAppNavCodepen';

function IndividualEvent() {
    const searchParams = useSearchParams();
    const eventId = searchParams.get('id');
    const [selectedEventIndex, setSelectedEventIndex] = useState(eventId - 1);
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
        <div className="min-h-screen w-full flex flex-col items-center relative">
            <StarryBackground extraClass={"z-10 top-0 left-0 right-0 bottom-0 bg-[radial-gradient(circle_at_bottom,#000_0%,#000_100%)]"} />

            <NewAppNavCodepen />

            <h1 className='text-4xl md:text-[3.2rem] font-[Tasa-SemiBold] text-white text-center pt-[100px] pb-[30px] md:pt-[130px] md:pb-[40px] relative z-20'>Register Now</h1>
            {/* Tabs for Events */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-6 relative z-20">
                {Data.map((event, index) => (
                    <button
                        key={event?.id}
                        onClick={() => changeEventHandler(index)}
                        className={`flex justify-center items-center px-4 py-2 rounded text-xs md:text-base ${selectedEventIndex === index ? 'border-[1px] border-[#16423c] shadow-[0px_0px_20px_rgba(22,66,60,1)]' : 'border-none'}`}>
                        {event?.title}
                    </button>
                ))}
            </div>

            {/* Slider for Sub-Events */}
            <div className="flex md:justify-center md:items-center w-full relative z-20">
                <button onClick={prevSubEvent} disabled={subEventIndex === 0} className="hidden md:block px-4 py-2 rounded border-[1px] border-[#16423c] shadow-[0px_0px_20px_rgba(22,66,60,1)]">Previous</button>

                <div className="flex flex-col md:overflow-hidden h-full w-full md:w-1/2 mx-6">
                    <GradientBox extraClass="w-full md:m-0 p-5">
                        <div className='h-full flex flex-row justify-between items-start'>
                            <div className='h-full flex flex-col justify-between'>
                                <div className='flex flex-col'>
                                    <h2 className='text-2xl md:text-4xl font-[Tasa-SemiBold] mb-2 text-white'>{currentSubEvents[subEventIndex]?.title}</h2>
                                    <p className="text-xs md:text-base font-[Tasa-Regular] leading-6 text-gray-300 text-left">{currentSubEvents[subEventIndex]?.description}</p>
                                </div>

                                <img src={currentSubEvents[subEventIndex]?.src} alt={currentSubEvents[subEventIndex]?.title} className='md:hidden w-full md:h-[300px] rounded-xl my-4 md:p-8' />

                                <div className='w-full gap-5 mt-2 justify-between items-center flex '>
                                    <RegisterBtn extraClass="text-xs md:text-base" />
                                    <button className='text-xs md:text-base h-[50px] md:h-[52px] z-10 font-[Tasa-SemiBold] rounded-xl text-white bg-[#6A9C89] hover:bg-[#032221] px-4'>Download Rules</button>
                                </div>
                            </div>

                            <img src={currentSubEvents[subEventIndex]?.src} alt={currentSubEvents[subEventIndex]?.title} className='hidden md:block h-[250px] md:h-[300px] rounded-xl p-8' />

                        </div>
                    </GradientBox>
                    {/* Dotted Indicator */}
                    <div className="flex justify-center pt-4">
                        {currentSubEvents.map((_, index) => (
                            <div key={index} className={`w-2 h-2 rounded-full mx-1 ${subEventIndex === index ? 'bg-[#16423c]' : 'bg-gray-400'}`} />
                        ))}
                    </div>
                </div>

                <button onClick={nextSubEvent} disabled={subEventIndex === currentSubEvents.length - 1} className="hidden md:block px-4 py-2 rounded border-[1px] border-[#16423c] shadow-[0px_0px_20px_rgba(22,66,60,1)]">Next</button>
            </div>

            {/* div for the next and prev button for mobile screens */}
            <div className='flex md:hidden relative z-50 my-10'>
                <button onClick={prevSubEvent} disabled={subEventIndex === 0} className="px-4 py-2 mx-2 rounded border-[1px] border-[#16423c] shadow-[0px_0px_20px_rgba(22,66,60,1)]">Previous</button>
                <button onClick={nextSubEvent} disabled={subEventIndex === currentSubEvents.length - 1} className="px-4 py-2 mx-2 rounded border-[1px] border-[#16423c] shadow-[0px_0px_20px_rgba(22,66,60,1)]">Next</button>
            </div>
        </div>
    )
}

export default IndividualEvent