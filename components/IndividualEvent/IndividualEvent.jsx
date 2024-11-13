'use client'

import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

import StarryBackground from '../StarryBackground/StarryBackground';
import DesktopNavbar from "@/components/Navbar/DesktopNavbar";
import MobileNavbar from "@/components/Navbar/MobileNavbar";
import RegisterBtn from '../ui/RegisterBtn';
import GradientBox from '../ui/GradientBox';

import { Data } from '../Events/EventsData';

// Custom hook to get window width
const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 0
    );

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => setWindowWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    return windowWidth;
};


function IndividualEvent() {
    const searchParams = useSearchParams();
    const eventId = searchParams.get('id');
    const [selectedEventIndex, setSelectedEventIndex] = useState(eventId - 1);
    const [subEventIndex, setSubEventIndex] = useState(0);
    const windowWidth = useWindowWidth();

    const isMobile = windowWidth < 768;

    useEffect(() => {
        return () => {
            // This will run when the component is unmounted (i.e., when navigating away)
            sessionStorage.setItem('hasNavigatedBack', 'true');
        };
    }, []);

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

    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const gradientBoxRef = useRef(null);

    // Minimum swipe distance (in px) to trigger a swipe action
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    }

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe) {
            nextSubEvent();
        } else if (isRightSwipe) {
            prevSubEvent();
        }
    }

    return (
        <div className="min-h-screen w-full flex flex-col items-center relative select-none">
            <StarryBackground extraClass={"z-10 top-0 left-0 right-0 bottom-0 bg-[radial-gradient(circle_at_bottom,#000_0%,#000_100%)]"} />

            {isMobile ? <MobileNavbar /> : <DesktopNavbar />}

            <h1 className='text-3xl md:text-[2.5rem] font-[Ethnocentric] text-white text-center pt-[100px] pb-[30px] md:pt-[130px] md:pb-[40px] relative z-20'>Register Now</h1>
            {/* Tabs for Events */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-6 relative z-20">
                {Data.map((event, index) => (
                    <button
                        key={event?.id}
                        onClick={() => changeEventHandler(index)}
                        className={`font-[megatrans] flex justify-center items-center px-4 py-2 rounded text-xs md:text-base ${selectedEventIndex === index ? 'border-[1px] border-[#16423c] shadow-[0px_0px_20px_rgba(22,66,60,1)]' : 'border-none'}`}>
                        {event?.title}
                    </button>
                ))}
            </div>

            {/* Slider for Sub-Events */}
            <div className="h-full flex md:justify-center md:items-center w-full relative z-20">
                <button onClick={prevSubEvent} disabled={subEventIndex === 0} className="hidden md:block py-4 pr-3 rounded border-[1px] border-[#16423c] shadow-[0px_0px_20px_rgba(22,66,60,1)]">
                    <FaArrowLeft />
                </button>

                <div
                    ref={gradientBoxRef}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    <GradientBox extraClass="w-fit md:h-[400px] md:w-[900px] flex flex-col md:flex-row justify-between items-center p-8 text-white mx-6" >
                        {/* Left Column */}
                        <div className="md:w-[60%] md:mb-0 md:pr-8 h-full flex flex-col justify-between " >
                            <div className='h-full'>
                                <h1 className="text-2xl md:text-3xl font-[Ethnocentric] mb-2 text-white">
                                    {currentSubEvents[subEventIndex]?.title}
                                </h1>
                                <p className="text-xs md:text-base font-[Megatrans] leading-6 text-gray-300 text-justify">
                                    {currentSubEvents[subEventIndex]?.description}
                                </p>
                            </div>

                            <Image
                                src={currentSubEvents[subEventIndex]?.src}
                                alt={currentSubEvents[subEventIndex]?.title}
                                className='md:hidden rounded-xl my-4 md:p-8'
                                loading='lazy'
                                layout="responsive"
                                width={500}
                                height={300}
                            />

                            <div className="flex gap-4 md:mt-4 justify-center md:justify-start">
                                <RegisterBtn text="Register" extraClass="text-xs md:text-base h-[48px] md:h-[52px]" />
                                <button className="text-xs md:text-base h-[48px] md:h-[52px] z-10 font-[Megatrans] rounded-xl text-white bg-[#6A9C89] hover:bg-[#032221] px-4">
                                    Download Rules
                                </button>
                            </div>
                        </ div>

                        {/* Right Column */}
                        < div className="md:w-[40%] h-full flex justify-end" >
                            <Image
                                src={currentSubEvents[subEventIndex]?.src}
                                alt={currentSubEvents[subEventIndex]?.title}
                                className="w-full rounded-xl hidden md:block"
                                loading='lazy'
                                layout="responsive"
                                width={500}
                                height={300}
                            />
                        </ div>
                    </GradientBox >

                    <div className="flex justify-center pt-4">
                        {currentSubEvents.map((_, index) => (
                            <div key={index} className={`w-2 h-2 rounded-full mx-1 ${subEventIndex === index ? 'bg-[#16423c]' : 'bg-gray-400'}`} />
                        ))}
                    </div>
                </div>

                <button onClick={nextSubEvent} disabled={subEventIndex === currentSubEvents.length - 1} className="hidden md:block py-4 pr-3 rounded border-[1px] border-[#16423c] shadow-[0px_0px_20px_rgba(22,66,60,1)]">
                    <FaArrowRight />
                </button>
            </div >

            {/* div for the next and prev button for mobile screens */}
            <div className='flex md:hidden relative z-50 my-10' >
                <button onClick={prevSubEvent} disabled={subEventIndex === 0} className="pr-2 py-2 mx-2 rounded border-[1px] border-[#16423c] shadow-[0px_0px_20px_rgba(22,66,60,1)]">
                    <FaArrowLeft />
                </button>
                <button onClick={nextSubEvent} disabled={subEventIndex === currentSubEvents.length - 1} className="pr-2 py-2 mx-2 rounded border-[1px] border-[#16423c] shadow-[0px_0px_20px_rgba(22,66,60,1)]">
                    <FaArrowRight />
                </button>
            </div>
        </div >
    )
}

export default IndividualEvent
