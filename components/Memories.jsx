import React from 'react';
import Navbars from './Navbars';

function Memories() {
  // Define the number of images and their fixed positions
  const imagePositions = [
    { top: '10vh', left: '10vw' },
    { top: '15vh', left: '60vw' },
    { top: '25vh', left: '30vw' },
    { top: '35vh', left: '70vw' },
    { top: '50vh', left: '20vw' },
    { top: '60vh', left: '50vw' },
    { top: '70vh', left: '10vw' },
    { top: '75vh', left: '80vw' },
    { top: '80vh', left: '40vw' },
  ];

  return (
    <div className='h-screen w-full relative flex flex-col items-center justify-center bg-cover bg-center'>
      {/* Memories heading in the background */}
      <h1 id='headingg' className='absolute text-[5rem] text-white z-0'>
        Memories
      </h1>

      {/* Scattered images in the front */}
      <div className='relative w-full h-full z-10'>
        {imagePositions.map((position, index) => (
          <div
            key={index}
            className='absolute h-[150px] w-[150px] overflow-hidden rounded-lg shadow-lg transition-all duration-300'
            style={{
              top: position.top,
              left: position.left,
            }}
          >
            <img
              src="/memoryBox.png"
              alt="Memory"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Memories;
