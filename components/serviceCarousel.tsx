"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const StaggeredCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const cards = [
    { id: 1, title: "Card 1", color: "bg-blue-500" },
    { id: 2, title: "Card 2", color: "bg-purple-500" },
    { id: 3, title: "Card 3", color: "bg-pink-500" },
    { id: 4, title: "Card 4", color: "bg-orange-500" },
    { id: 5, title: "Card 5", color: "bg-green-500" },
  ];

  const getCardStyle = (index) => {
    // Calculate distance considering circular looping
    let distance = index - currentIndex;
    const totalCards = cards.length;

    // Adjust for circular distance (shortest path around the circle)
    if (distance > totalCards / 2) distance -= totalCards;
    if (distance < -totalCards / 2) distance += totalCards;

    const absDistance = Math.abs(distance);

    // Position 0 (center): baseline (0px up)
    // Position 1 (±1 from center): 40px up
    // Position 2 (±2 from center): 80px up
    const translateY = absDistance === 0 ? 0 : absDistance === 1 ? -40 : -80;

    // Scale and opacity based on distance
    const scale = absDistance === 0 ? 1 : absDistance === 1 ? 0.9 : 0.8;
    const opacity = absDistance === 0 ? 1 : absDistance === 1 ? 0.8 : 0.6;

    return {
      transform: `translateX(${
        distance * 280
      }px) translateY(${translateY}px) scale(${scale})`,
      opacity: opacity,
      zIndex: 5 - absDistance,
    };
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-full max-w-6xl">
        {/* Carousel Container */}
        <div className="relative h-96 flex items-end justify-center overflow-hidden">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`absolute w-64 h-80 ${card.color} rounded-2xl shadow-2xl transition-all duration-500 ease-out cursor-pointer`}
              style={getCardStyle(index)}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="flex flex-col items-center justify-center h-full text-white p-6">
                <div className="text-6xl font-bold mb-4">{card.id}</div>
                <div className="text-2xl font-semibold">{card.title}</div>
                {index === currentIndex && (
                  <div className="mt-4 px-4 py-2 bg-white bg-opacity-20 rounded-lg text-sm">
                    Active
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {cards.map((card, index) => (
            <button
              key={card.id}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-white w-8"
                  : "bg-white bg-opacity-40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaggeredCarousel;
