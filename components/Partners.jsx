import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

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

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name }) => {
  return (
    <figure
      className={cn(
        "relative cursor-pointer overflow-hidden rounded-xl p-4 ml-10 md:ml-20",
      )}
    >
      <div className="flex flex-col items-center justify-center ">
        <img src={img} alt={name} className="w-32 h-32 md:w-40 md:h-40" />
        <h1 className="text-gray-100 font-[Tasa-SemiBold] text-2xl mt-4">Brand</h1>
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex min-h-[700px] -mt-[70px] md:-mt-[10px] w-full flex-col items-center justify-center overflow-hidden bg-transparent">
      <Marquee pauseOnHover className="bg-transparent [--duration:20s] mb-4">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="bg-transparent [--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-transparent"></div>
    </div>
  );
}


