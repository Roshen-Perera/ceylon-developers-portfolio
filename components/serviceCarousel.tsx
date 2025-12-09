"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { H5, P } from "./typography";

const StaggeredCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const getServiceData = (index: number) => {
    const serviceIndex = ((index % services.length) + services.length) % services.length;
    return services[serviceIndex];
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
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-full max-w-6xl">
        {/* Carousel Container */}
        <div className="relative h-144 overflow-hidden lg:my-0 lg:mt-0 -my-30 -mt-80">
          <div className="absolute inset-0 flex items-center justify-center">
            {indicesToRender.map((index) => {
              const service = getServiceData(index);
              const style = getCardStyle(index);

              if (style.display === "none") return null;

              return (
                <div
                  key={index}
                  className={`absolute left-1/2  rounded-2xl shadow-2xl transition-all duration-500 ease-out cursor-pointer`}
                  style={style}
                  onClick={() => setCurrentIndex(index)}
                >
                  <div className="flex flex-col lg:h-100 w-64 border-[#17CDCA] border rounded-lg gap-4 p-3 justify-center">
                    <div>
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={40}
                        height={40}
                      />
                      <H5 className=" text-[#17CDCA]">{service.title}</H5>
                    </div>
                    <P>{service.description}</P>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2">
          {services.map((service, index) => (
            <button
              key={service.title}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex % services.length === index
                  ? "bg-[#17CDCA]"
                  : "border-[#17CDCA] border-2"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaggeredCarousel;