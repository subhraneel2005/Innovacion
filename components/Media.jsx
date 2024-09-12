import React from 'react';
import StarryBackground from './StarryBackground/StarryBackground';
import Partners, { MarqueeDemo } from "./Partners"

function Media() {
  return (
    <div
      className="min-h-screen w-full flex flex-col justify-center items-center bg-cover overflow-hidden p-8"
      style={{ backgroundImage: 'url(/parallaxBg.png)' }}
    >
      <StarryBackground extraClass={"z-10"} />

      {/* About Us Section */}
      <div
        className="text-gray-100 border border-gray-300 px-14 py-4 text-center rounded-lg shadow-lg space-y-4 mb-12 w-full h-full max-w-6xl"
        style={{
          background: 'linear-gradient(135deg, rgba(10, 24, 24, 0.9), rgba(21, 36, 35, 0.9))',
        }}
      >
        <h2 className="text-[3.2rem] font-bold mb-4">Media Coverage</h2>

        {/* Media Content Container */}
        <div className="flex px-6 py-3 items-start w-full rounded-xl shadow-xl bg-[#0F0F0F] space-x-6">
          <img src="/memoryBox.png" alt="images" className="h-[150px] w-[150px]" />
          <div className="flex flex-col space-y-3 text-left">
            <p className="text-4xl text-gray-200">Title 1</p>
            <p className="text-[15px] text-gray-400">
              Institute of Engineering & Management (IEM), leading engineering and management college in Kolkata, organized the 10th edition of its annual techno-management fest, Innovación 2023 on 10 March. The fest showcased the most recent developments in innovation, entrepreneurship, and technology. More than 25 events were scheduled for the tech fest, which started on Friday evening and will continue until Sunday.
            </p>
          </div>
        </div>

        <div className="flex px-6 py-3 items-start w-full rounded-xl shadow-xl bg-[#0F0F0F] space-x-6">
          <div className="flex flex-col space-y-3 text-left">
            <p className="text-4xl text-gray-200">Title 1</p>
            <p className="text-[15px] text-gray-400">
              Institute of Engineering & Management (IEM), leading engineering and management college in Kolkata, organized the 10th edition of its annual techno-management fest, Innovación 2023 on 10 March. The fest showcased the most recent developments in innovation, entrepreneurship, and technology. More than 25 events were scheduled for the tech fest, which started on Friday evening and will continue until Sunday.
            </p>
          </div>
          <img src="/memoryBox.png" alt="images" className="h-[150px] w-[150px]" />
        </div>

        <div className="flex px-6 py-3 items-start w-full rounded-xl shadow-xl bg-[#0F0F0F] space-x-6">
          <img src="/memoryBox.png" alt="images" className="h-[150px] w-[150px]" />
          <div className="flex flex-col space-y-3 text-left">
            <p className="text-4xl text-gray-200">Title 1</p>
            <p className="text-[15px] text-gray-400">
              Institute of Engineering & Management (IEM), leading engineering and management college in Kolkata, organized the 10th edition of its annual techno-management fest, Innovación 2023 on 10 March. The fest showcased the most recent developments in innovation, entrepreneurship, and technology. More than 25 events were scheduled for the tech fest, which started on Friday evening and will continue until Sunday.
            </p>
          </div>
        </div>

      </div>
    <h2 className="text-[3.8rem] mt-28 text-gray-100 font-bold mb-4">Partners</h2>
    <MarqueeDemo/>
    </div>
  );
}

export default Media;