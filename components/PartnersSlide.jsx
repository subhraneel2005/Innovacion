import React from 'react'
import { MarqueeDemo } from './Partners'
import StarryBackground from './StarryBackground/StarryBackground'

export default function PartnersSlide() {
  return (
    <div id='partners' className="h-full w-full -top-40 flex flex-col items-center justify-center relative rounded-b-[40px] border-y-2 border-[#16423C] shadow-[0px_0px_20px_rgba(22,66,60,1)">
      <StarryBackground extraClass={"z-10 left-0 right-0 bottom-0 rounded-b-[40px] bg-[radial-gradient(circle_at_bottom,#000_0%,#000_100%)] "} />
      <MarqueeDemo />
    </div>
  )
}
