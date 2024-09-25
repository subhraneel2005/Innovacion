// DesktopMedia.js

import React from 'react';

const DesktopMedia = ({ index }) => {
    return (
        <div className="flex flex-row p-6 w-full rounded-xl  backdrop-blur-[2px] border-[1px] border-[#16423C] shadow-[0px_0px_20px_rgba(22,66,60,1)]  space-x-8 m-6 ">
            <img
                src="/memoryBox.png"
                alt="images"
                className="h-[200px] w-[200px] object-cover rounded-[8px]"
            />
            <div className="flex flex-col space-y-4 text-left w-full">
                <p className="text-4xl text-white font-bold">Title {index + 1}</p>
                <p className="text-[16px] text-gray-300 leading-7">
                    Institute of Engineering & Management (IEM) in Kolkata recently organized the 10th edition of its flagship event, Innovación 2023. This tech fest highlighted innovations in entrepreneurship, technology, and management, with over 25 events during the weekend.
                </p>
            </div>
        </div>
    );
};

export default DesktopMedia;
