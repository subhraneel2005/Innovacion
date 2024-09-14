"use client"
import Lenis from 'lenis';
import React,{useEffect} from 'react';


function SmoothScrollWrapper({children}) {
    useEffect(() => {
        const lenis = new Lenis()
    
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
    
        requestAnimationFrame(raf)
      },[])
  return (
    <div>
        {children}
    </div>
  )
}

export default SmoothScrollWrapper
