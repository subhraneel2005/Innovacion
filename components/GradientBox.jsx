import React from 'react'

const GradientBox = ({ children, extraClass }) => {
    return (
        <div className={`border-2 border-[#16423C] bg-[#0000] rounded-xl backdrop-blur-[60px] p-10 relative z-20 my-[100px] mx-[50px] ${extraClass}`}>
            <div className='h-[220px] w-[250px] bg-[#16423C] rounded-full absolute -top-5 -left-8 -z-10 filter blur-[90px]'></div>
            <div className='h-[220px] w-[250px] bg-[#16423C] rounded-full absolute -bottom-8 -right-8 -z-10 filter blur-[90px]'></div>
            {children}
        </div>
    )
}

export default GradientBox