import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Robotics",
      src: "/Events/robotics.webp",
      price: 200
    },
    {
      title: "Exhibition",
      src: "/Events/exhibition.webp",
      price: 200
    },
    {
      title: "Hackathon",
      src: "/Events/hackathon.webp",
      price: 200
    },
    {
      title: "Gaming",
      src: "/Events/gaming.webp",
      price: 200
    },
    {
      title: "Management",
      src: "/Events/Management.webp",
      price: 200
    },
    {
      title: "Others",
      src: "/Events/Others.webp",
      price: 200
    },
  ];

  return <FocusCards cards={cards} />;
}
