import React from 'react'
import { useRouter } from 'next/navigation'
import GradientBox from '../ui/GradientBox'
import RegisterBtn from '../ui/RegisterBtn'

const EventBulletinCard = ({ bannerPic, name, description }) => {
    const router = useRouter();

    const navigateToEventPage = () => {
        router.push("/events?id=1")
    }

    return (
        <GradientBox extraClass="mb-8 flex justify-center items-center flex-col md:flex-row gap-6 p-6 md:p-4 ">
            <img
                loading='lazy'
                src={bannerPic}
                alt={name}
                className="w-40 h-40 md:w-80 md:h-80 rounded-xl object-cover"
            />
            <div className="text-justify md:text-left">
                <h1 className="text-2xl md:text-xl text-center md:text-left text-white font-bold mb-2 font-[Ethnocentric]">{name}</h1>
                <h2 className="text-lg md:text-base text-gray-300 mb-2 font-[Megatrans]">{description}</h2>
                <RegisterBtn text="Register" extraClass="mt-6 md:h-[48px]" onClick={navigateToEventPage} />
            </div>
        </GradientBox>
    )
}

export default EventBulletinCard