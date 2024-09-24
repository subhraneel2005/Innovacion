import React from 'react'

const GradientBox = ({ children, extraClass }) => {
    return (
        <div className={`border-[1px] border-[#16423C] bg-[#0000] rounded-xl backdrop-blur-[3px] p-10 relative z-20 ${extraClass}`}>
            <div className='h-[190px] w-[210px] md:h-[230px] md:w-[250px] bg-[#16423C] rounded-full absolute -top-5 -left-8 -z-10 filter blur-[60px] opacity-60'></div>

            <div className='h-[190px] w-[210px] md:h-[230px] md:w-[250px] bg-[#16423C] rounded-full absolute -bottom-8 -right-8 -z-10 filter blur-[60px] opacity-60'></div>
            {children}
        </div>
    )
}

export default GradientBox