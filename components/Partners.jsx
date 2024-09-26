import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Rotary Club",
    img: "partners_logo/1.png",
  },
  {
    name: "Jill",
    img: "partners_logo/2.png",
  },
  {
    name: "John",
    img: "partners_logo/3.png",
  },
  {
    name: "Jane",
    img: "partners_logo/4.png",
  },
  {
    name: "Jenny",
    img: "partners_logo/5.png",
  },
  {
    name: "James",
    img: "partners_logo/6.png",
  },
  {
    name: "Rotary Club",
    img: "partners_logo/7.png",
  },
  {
    name: "Rotary Club",
    img: "partners_logo/8.png",
  },
  {
    name: "Rotary Club",
    img: "partners_logo/9.png",
  },
  {
    name: "Rotary Club",
    img: "partners_logo/10.png",
  },
  {
    name: "Rotary Club",
    img: "partners_logo/11.png",
  },
  {
    name: "Rotary Club",
    img: "partners_logo/12.png",
  },
  {
    name: "Rotary Club",
    img: "partners_logo/13.png",
  },
  {
    name: "Rotary Club",
    img: "partners_logo/14.png",
  },
  {
    name: "Rotary Club",
    img: "partners_logo/15.png",
  },
  {
    name: "Rotary Club",
    img: "partners_logo/16.png",
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
        <h1 className="text-gray-100 font-[Tasa-SemiBold] text-2xl mt-4"></h1>
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


