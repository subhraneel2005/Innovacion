import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Event 1",
      src: "/Events/e1.png",
      price: 200
    },
    {
      title: "Event 2",
      src: "/Events/e2.png",
      price: 200
    },
    {
      title: "Event 3",
      src: "/Events/e3.png",
      price: 200
    },
    {
      title: "Event 4",
      src: "/Events/e4.png",
      price: 200
    },
    {
      title: "Event 5",
      src: "/Events/e5.png",
      price: 200
    },
    {
      title: "Event 6",
      src: "/Events/e6.png",
      price: 200
    },
  ];

  return <FocusCards cards={cards} />;
}
