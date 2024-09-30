"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import RegisterBtn from "../RegisterBtn";

// Card component
export const Card = React.memo(({ card, index, hovered, setHovered, onCardClick }) => {
  const handleCardClick = () => {
    onCardClick(card); // Pass the card details to the handler
  };

  return (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "cursor-pointer rounded-lg relative dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute inset-0 border-2 border-[#16423C] rounded-[10px]"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          <p className="text-gray-200 mb-3 text-2xl md:text-4xl">{card.title}</p>
          <RegisterBtn text="Explore" onClick={handleCardClick}/>
        </div>
      </div>
    </div>
  );
});

Card.displayName = "Card";

// FocusCards component
export function FocusCards({ cards, onCardClick }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl w-full">
      {cards.map((card, index) => (
        <Card 
          key={card.title} 
          card={card} 
          index={index} 
          hovered={hovered} 
          setHovered={setHovered} 
          onCardClick={onCardClick} // Pass the card click handler
        />
      ))}
    </div>
  );
}
