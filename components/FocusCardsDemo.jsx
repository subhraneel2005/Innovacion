import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Event 1",
      src: "/e1.png",
      price: 200
    },
    {
      title: "Event 2",
      src: "/e2.png",
      price: 200
    },
    {
      title: "Event 3",
      src: "/e3.png",
      price: 200
    },
    {
      title: "Event 4",
      src: "/e4.png",
      price: 200
    },
    {
      title: "Event 5",
      src: "/e5.png",
      price: 200
    },
    {
      title: "Event 6",
      src: "/e6.png",
      price: 200
    },
  ];

  return <FocusCards cards={cards} />;
}
