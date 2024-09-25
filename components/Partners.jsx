import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Jack",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    img: "https://avatar.vercel.sh/james",
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


