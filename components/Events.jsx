import React from 'react';
import StarryBackground from './StarryBackground/StarryBackground';
import { FocusCardsDemo } from './FocusCardsDemo';
import GradientBox from './GradientBox';

function Events() {
  return (
    <div id='events' className="min-h-screen w-full rounded-[40px] relative z-10 -top-[40px] border-2 border-[rgb(22,66,60)] lg:px-[108px] shadow-[0px_0px_20px_rgba(22,66,60,1)]" >
      <StarryBackground extraClass={"z-10 top-0 left-0 right-0 bottom-0 rounded-[40px] bg-[radial-gradient(circle_at_bottom,#000_0%,#000_100%)]"} />

      <GradientBox extraClass="mb-8 flex justify-center items-center flex-col">
        <h2 className="md:text-[3.2rem] text-4xl text-center font-[Tasa-SemiBold] mb-4 text-white">About INNOVACIÓN</h2>
        <p className="md:text-base text-[15px] font-[Tasa-SemiBold] leading-6 text-gray-300">
          Institute of Engineering and Management, Kolkata in association with University of Engineering and Management, proudly presents the 12th edition of its Annual Techno-Management Fest, Innovación 2025, from 7th to 9th March, 2025. Innovación ignites intellects like celestial supernovas, a magnificent fusion of cutting-Edge technology and boundless creativity. Students will showcase their unparalleled brilliance, their ideas shining like stars in a limitless universe of innovation. Each day unfolds into a grand celebration, where invention soars to new dimensions. Embark on this stellar voyage and witness the uncharted realms of ingenuity and discovery!        </p>
      </GradientBox>

      {/* Events Section */}
      <GradientBox>
        <h2 className="text-[3.2rem] font-[Tasa-SemiBold] mb-4 text-center text-white">Events</h2>
        <div className='flex justify-center items-center '>
          <FocusCardsDemo className='cursor-pointer' />
        </div>
      </GradientBox>
    </div>
  );
}

export default Events;

