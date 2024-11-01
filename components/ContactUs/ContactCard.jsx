import React from 'react'
import GradientBox from '../ui/GradientBox'

const ContactCard = ({ profilePic, name, department, phnNo }) => {
    return (
        <GradientBox extraClass="mb-8 flex justify-center items-center flex-col md:flex-row gap-6 p-6 md:p-4 ">
            <img
                src={profilePic}
                alt={name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
            />
            <div className="text-center md:text-left">
                <h1 className="text-2xl md:text-xl text-white font-bold mb-2 font-[Ethnocentric]">{name}</h1>
                <h2 className="text-lg md:text-base text-gray-300 mb-2 font-[Megatrans]">{department}</h2>
                <h1 className="text-xl md:text-xl text-white font-semibold text-primary-500">{phnNo}</h1>
            </div>
        </GradientBox>
    )
}

export default ContactCard