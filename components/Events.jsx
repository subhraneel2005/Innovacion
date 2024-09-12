import React from 'react';
import StarryBackground from './StarryBackground/StarryBackground';
import { FocusCardsDemo } from './FocusCardsDemo';
import GradientBox from './GradientBox';

function Events() {
  return (
    <div className="min-h-screen w-full rounded-[40px] relative -top-[40px] border-2 border-[#16423C] lg:px-[108px]" >
      <StarryBackground extraClass={"z-10 top-0 left-0 right-0 bottom-0 rounded-[40px] bg-[radial-gradient(circle_at_bottom,#000_0%,#000_100%)]"} />

      <GradientBox extraClass="mb-8 flex justify-center items-center flex-col">
        <h2 className="text-[3.2rem] font-bold mb-4 text-white">About us</h2>
        <p className="text-base leading-6 text-gray-300 text-center">
          Institute of Engineering and Management, Kolkata in association with University of Engineering and Management is organizing its Annual Techno-Management Fest Innovation 2024 from 08th to 10th March, 2024. Innovation ignites minds ablaze, a vibrant fusion of tech brilliance and creative marvel. Students showcase prowess, ideas on display. A celebration where innovation takes the stage each day. Lets explore the madness of the metaverse by scrolling down.
        </p>
      </GradientBox>

      {/* Events Section */}
      <GradientBox>
        <h2 className="text-[3.2rem] font-bold mb-4 text-center text-white">Events</h2>
        <div>
          <FocusCardsDemo className='cursor-pointer' />
        </div>
      </GradientBox>
    </div>
  );
}

export default Events;

