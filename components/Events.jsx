import React from 'react';
import StarryBackground from './StarryBackground/StarryBackground';
import { FocusCardsDemo } from './FocusCardsDemo';

function Events() {
  return (
    <div
      className="min-h-screen w-full flex flex-col justify-center items-center bg-cover overflow-hidden p-8"
      style={{ backgroundImage: 'url(/parallaxBg.png)' }}
    >
      <StarryBackground extraClass={"z-10"} />

      {/* About Us Section */}
      <div className="text-gray-100 border border-gray-300 px-14 py-4 text-center rounded-lg shadow-lg mb-12 w-full max-w-6xl"
        style={{ 
          background: 'linear-gradient(135deg, rgba(10, 24, 24, 0.9), rgba(21, 36, 35, 0.9))' 
        }}
      >
        <h2 className="text-[3.2rem] font-bold mb-4">About us</h2>
        <p className="text-base leading-6 text-gray-300">
          Institute of Engineering & Management, Kolkata in association with University of Engineering & Management is organizing its Annual Techno-Management Fest "Innovation 2024" from 08th - 10th March, 2024. Innovation ignites minds ablaze, a vibrant fusion of tech brilliance and creative marvel. Students showcase prowess, ideas on display. A celebration where innovation takes the stage each day. Let's explore the madness of the metaverse by scrolling down.
        </p>
      </div>

      {/* Events Section */}
      <div className="text-gray-100 border border-gray-300 px-14 py-4 rounded-lg flex flex-col w-full max-w-6xl"
        style={{ 
          background: 'linear-gradient(135deg, rgba(10, 24, 24, 0.9), rgba(21, 36, 35, 0.9))' 
        }}
      >
        <h2 className="text-[3.2rem] font-bold mb-4 text-center">Events</h2>
        <div>
         <FocusCardsDemo className='cursor-pointer'/>
        </div>
      </div>
    </div>
  );
}

export default Events;

