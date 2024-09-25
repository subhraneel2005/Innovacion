'use client';
import { useRouter } from 'next/navigation';
import { FocusCards } from './ui/focus-cards';

export function FocusCardsDemo() {
  const router = useRouter();

  const cards = [
    {
      id: 1,
      title: "Robotics",
      src: "/Events/robotics.webp",
      price: 200
    },
    {
      id: 2,
      title: "Exhibition",
      src: "/Events/exhibition.webp",
      price: 200
    },
    {
      id: 3,
      title: "Hackathon",
      src: "/Events/hackathon.webp",
      price: 200
    },
    {
      id: 4,
      title: "Gaming",
      src: "/Events/gaming.webp",
      price: 200
    },
    {
      id: 5,
      title: "Management",
      src: "/Events/Management.webp",
      price: 200
    },
    {
      id: 6,
      title: "Others",
      src: "/Events/Others.webp",
      price: 200
    },
  ];

  const handleCardClick = (card) => {
    const id = card.id
    router.push(`/events?id=${id}`);
  };

  return (
    <FocusCards
      cards={cards}
      onCardClick={handleCardClick} // Pass the handler to FocusCards
    />
  );
}
