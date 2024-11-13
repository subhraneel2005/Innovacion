import React from 'react'
import { useRouter } from 'next/navigation'
import GradientBox from '../ui/GradientBox'
import RegisterBtn from '../ui/RegisterBtn'
import Image from 'next/image'

const EventBulletinCard = ({ bannerPic, name, description }) => {
    const router = useRouter();

    const navigateToEventPage = () => {
        router.push("/events?id=1")
    }

    return (
        <GradientBox extraClass="mb-8 flex justify-center items-center flex-col md:flex-row gap-6 p-6 md:p-4 ">
            <Image
                loading='lazy'
                src={bannerPic}
                alt={name}
                width={320}
                height={320}
                className="rounded-xl object-cover"
            />
            <div className="text-justify md:text-left flex flex-col items-center md:block">
                <h1 className="text-2xl md:text-xl text-center md:text-left text-white font-bold mb-2 font-[Ethnocentric]">{name}</h1>
                <h2 className="text-lg md:text-base text-gray-300 mb-2 font-[Megatrans]">{description}</h2>
                <RegisterBtn text="Register" extraClass="mt-6 md:h-[48px]" onClick={navigateToEventPage} />
            </div>
        </GradientBox>
    )
}

export default EventBulletinCard