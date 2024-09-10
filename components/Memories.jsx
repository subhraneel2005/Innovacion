import React from 'react';

function Memories() {
  // Define the number of images
  const images = Array.from({ length: 9 });

  // Utility to generate a random position in percentage
  const getRandomPosition = () => {
    return {
      top: `${Math.random() * 85}vh`,  // Random vertical position (0 to 80% of viewport height)
      left: `${Math.random() * 85}vw`, // Random horizontal position (0 to 80% of viewport width)
    };
  };

  return (
    <div className='h-screen w-full relative flex flex-col items-center justify-center bg-cover bg-center'>
      
      {/* Memories heading in the background */}
      <h1 id='headingg' className='absolute text-[5rem] text-white z-0'>
        Memories
      </h1>

      {/* Scattered images in the front */}
      <div className='relative w-full h-full z-10'>
        {images.map((_, index) => {
          const { top, left } = getRandomPosition();
          return (
            <div
              key={index}
              className='absolute h-[150px] w-[150px] overflow-hidden rounded-lg shadow-lg transition-all duration-300'
              style={{
                top,   // Set the random top position
                left,  // Set the random left position
              }}
            >
              <img
                src="/memoryBox.png"
                alt="Memory"
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Memories;
