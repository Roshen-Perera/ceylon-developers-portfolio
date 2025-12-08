"use client";
import React, { useState, useEffect } from "react";

const StaggeredCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { id: 1, title: "Card 1", color: "bg-blue-500" },
    { id: 2, title: "Card 2", color: "bg-purple-500" },
    { id: 3, title: "Card 3", color: "bg-pink-500" },
    { id: 4, title: "Card 4", color: "bg-orange-500" },
    { id: 5, title: "Card 5", color: "bg-green-500" },
  ];

  const services = [
    {
      title: "Review",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
      icon: "/assets/icons/review.jpg",
    },
    {
      title: "Software Testing Service",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
      icon: "/assets/icons/testing.gif",
    },
    {
      title: "Web Design & Development",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
      icon: "/assets/icons/web.gif",
    },
    {
      title: "Mobile App Development",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
      icon: "/assets/icons/mobile.gif",
    },
    {
      title: "UI/UX Design",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
      icon: "/assets/icons/ui.gif",
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const getCardData = (index: number) => {
    const cardIndex = ((index % cards.length) + cards.length) % cards.length;
    return cards[cardIndex];
  };

  const getCardStyle = (index: number) => {
    const distance = index - currentIndex;
    const absDistance = Math.abs(distance);

    // Only show cards within range
    if (absDistance > 4) {
      return { display: "none" };
    }

    // Calculate horizontal position
    const translateX = distance * 280;

    // Staggered height effect - creates step pattern on both sides
    // Center: 0px, ±1: -40px, ±2: -80px, ±3: -120px, ±4: -160px
    const translateY = -absDistance * 40;

    // Scale and opacity based on distance
    const scale = 1 - absDistance * 0.1;
    const opacity = 1 - absDistance * 0.15;

    return {
      transform: `translateX(calc(-50% + ${translateX}px)) translateY(${translateY}px) scale(${Math.max(
        scale,
        0.7
      )})`,
      opacity: Math.max(opacity, 0.4),
      zIndex: 10 - absDistance,
    };
  };

  const next = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  // Generate indices to render
  const indicesToRender = [];
  for (let i = currentIndex - 4; i <= currentIndex + 4; i++) {
    indicesToRender.push(i);
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <div className="relative w-full max-w-6xl">
        {/* Carousel Container */}
        <div className="relative h-96 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            {indicesToRender.map((index) => {
              const card = getCardData(index);
              const style = getCardStyle(index);

              if (style.display === "none") return null;

              return (
                <div
                  key={index}
                  className={`absolute left-1/2 w-64 h-80 ${card.color} rounded-2xl shadow-2xl transition-all duration-500 ease-out cursor-pointer`}
                  style={style}
                  onClick={() => setCurrentIndex(index)}
                >
                  <div className="flex flex-col h-full text-white p-6">
                    <div className="text-6xl font-bold mb-4">{card.id}</div>
                    <div className="text-2xl font-semibold">{card.title}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {cards.map((card, index) => (
            <button
              key={card.id}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex % cards.length === index
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