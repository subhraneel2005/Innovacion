import React from 'react'
import { MarqueeDemo } from './Partners'

export default function PartnersSlide() {
  return (
    <div id='partners' className="w-full flex flex-col items-center justify-center relative z-20">
        <h2 className="text-4xl md:text-[3.2rem] text-gray-100 font-[Tasa-SemiBold] mb-4">Partners</h2>
        <MarqueeDemo />
    </div>
  )
}
