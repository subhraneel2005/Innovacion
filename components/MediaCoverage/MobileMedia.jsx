// MobileMedia.js

import React from 'react';

const MobileMedia = ({ index }) => {
    return (
        <div className="flex flex-col p-8 items-center w-full backdrop-blur-[2px] rounded-xl border-[1px] border-[#16423C] shadow-[0px_0px_20px_rgba(22,66,60,1)] space-y-4 my-4">
            <img
                src="/memoryBox.png"
                alt="images"
                className="h-[120px] w-[120px] object-cover rounded-xl shadow-md"
            />
            <div className="flex flex-col text-center space-y-2">
                <p className="text-2xl text-white font-semibold">Title {index + 1}</p>
                <p className="text-xs text-gray-400 px-2 leading-5">
                    IEM, a leading engineering and management college, hosted its 10th Innovación fest with over 25 events showcasing the latest in tech, entrepreneurship, and innovation.
                </p>
            </div>
        </div>
    );
};

export default MobileMedia;
