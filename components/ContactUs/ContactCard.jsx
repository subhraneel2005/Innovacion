import React from 'react'
import GradientBox from '../ui/GradientBox'
import { FaWhatsapp } from 'react-icons/fa'

const ContactCard = ({ profilePic, name, department, phnNo, link }) => {
    return (
        <GradientBox extraClass="mb-8 flex items-center flex-col md:flex-row gap-6 p-6 md:p-4 ">
            <img
                src={profilePic}
                alt={name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
            />
            <div className="text-center flex flex-col items-center md:items-start md:text-left">
                <h1 className="text-2xl md:text-xl text-white font-bold mb-2 font-[Ethnocentric]">{name}</h1>
                <h2 className="text-lg md:text-base text-gray-300 mb-2 font-[Megatrans]">{department}</h2>
                <div className='flex items-center'>
                    <FaWhatsapp className='text-emerald-400 text-xl md:text-2xl mr-2 mt-[2px]' />
                    <h1 className="text-xl md:text-xl text-white font-semibold text-primary-500"><a href={link}>{phnNo}</a></h1>
                </div>
            </div>
        </GradientBox>
    )
}

export default ContactCard