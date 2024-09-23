import React from 'react';
import StarryBackground from '../StarryBackground/StarryBackground';
import Partners, { MarqueeDemo } from "../Partners";
import GradientBox from '../GradientBox';
import Media from './Media';

function MediaCoverage() {
  return (
    <div id='partners' className="min-h-screen w-full rounded-[40px] relative z-20 -top-[120px] border-2 border-[#16423C] shadow-[0px_0px_20px_rgba(22,66,60,1)]">
      <StarryBackground extraClass={"z-10 top-0 left-0 right-0 bottom-0 rounded-[40px] bg-[radial-gradient(circle_at_bottom,#000_0%,#000_100%)]"} />

      <GradientBox extraClass="mb-8 flex justify-center items-center flex-col lg:px-[108px]">
        <h2 className="text-[2rem] md:text-[3.2rem] font-[Tasa-SemiBold] mb-4 text-white text-center">Insights about INNOVACIÓN</h2>
        {[0, 1, 2].map(index => (
          <Media key={index} index={index} />
        ))}
      </GradientBox>

      <div className="w-full flex flex-col items-center justify-center">
        <h2 className="text-[2.5rem] md:text-[3.8rem] mt-28 text-gray-100 font-[Tasa-SemiBold] mb-4">Partners</h2>
        <MarqueeDemo />
      </div>
    </div>
  );
}

export default MediaCoverage;
