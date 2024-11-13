import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from 'next/image';

const reviews = [
  {
    name: "1",
    img: "/Partners/1.webp",
  },
  {
    name: "2",
    img: "/Partners/2.webp",
  },
  {
    name: "3",
    img: "/Partners/3.webp",
  },
  {
    name: "4",
    img: "/Partners/4.webp",
  },
  {
    name: "5",
    img: "/Partners/5.webp",
  },
  {
    name: "6",
    img: "/Partners/6.webp",
  },
  {
    name: "7",
    img: "/Partners/7.webp",
  },
  {
    name: "8",
    img: "/Partners/8.webp",
  },
  {
    name: "9",
    img: "/Partners/9.webp",
  },
  {
    name: "10",
    img: "/Partners/10.webp",
  },
  {
    name: "11",
    img: "/Partners/11.webp",
  },
  {
    name: "12",
    img: "/Partners/12.webp",
  },
  {
    name: "13",
    img: "/Partners/13.webp",
  },
  {
    name: "14",
    img: "/Partners/14.webp",
  },
  {
    name: "15",
    img: "/Partners/15.webp",
  },
  {
    name: "16",
    img: "/Partners/16.webp",
  },

];

const ReviewCard = ({ img, name }) => {
  return (
    <figure
      className={cn(
        "relative cursor-pointer overflow-hidden rounded-xl p-4 ml-10 md:ml-20",
      )}
    >
      <div className="flex flex-col items-center justify-center ">
        <Image src={img} alt={name} className="w-32 h-32 md:w-40 md:h-40" loading='lazy' width={128} height={128} />

      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex min-h-[900px] w-full flex-col items-center justify-center overflow-hidden bg-transparent z-20">
      <h1 className="z-20 text-3xl md:text-[2.5rem] font-[Ethnocentric] text-white text-center ">Present Partners</h1>
      <Marquee pauseOnHover className="bg-transparent [--duration:50s] mt-6 mb-20">
        {reviews.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <h1 className="z-20 text-3xl md:text-[2.5rem] font-[Ethnocentric] text-white text-center ">Previous Partners</h1>
      <Marquee pauseOnHover className="bg-transparent [--duration:50s] mt-6 mb-4">
        {reviews.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-transparent"></div>
    </div>
  );
}


