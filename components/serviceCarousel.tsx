"use client";

import React, { useState } from "react";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ServiceCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const services = [
    {
      id: 1,
      title: "Review",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
      icon: "/assets/icons/review.jpg",
    },
    {
      id: 2,
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
      icon: "/assets/icons/testing.gif",
    },
    {
      id: 3,
      title: "Web Design & Development",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
      icon: "/assets/icons/web.gif",
    },
    {
      id: 4,
      title: "Mobile App Development",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
      icon: "/assets/icons/mobile.gif",
    },
    {
      id: 5,
      title: "UI/UX Design",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
      icon: "/assets/icons/ui.gif",
    },
  ];

    const itemsPerView = 3;
    const maxIndex = Math.max(0, services.length - itemsPerView);

    const handlePrev = () => {
      setCurrentIndex((prev) => Math.max(0, prev - 1));
    };

    const handleNext = () => {
      setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    };

    const goToSlide = (index: number) => {
      setCurrentIndex(() => Math.min(index, maxIndex));
    };


  return (
    <>
      <div className="min-h-screen bg-black flex items-center justify-center p-8">
        <div className="max-w-7xl w-full">
          {/* Header Text */}
          <p className="text-cyan-400 text-center mb-12 text-sm tracking-wide">
            Join us on this journey into the future of technology.
          </p>

          {/* Carousel Container */}
          <div className="relative">
            {/* Cards Container */}
            <div className="overflow-hidden">
              <div
                className="flex gap-6 transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / itemsPerView)
                  }%)`,
                }}
              >
                {services.map((service, index) => {
                  const displayIndex = index - currentIndex;
                  const isCenterCard =
                    displayIndex === Math.floor(itemsPerView / 2);

                  return (
                    <div
                      key={service.id}
                      className={`shrink-0 bg-linear-to-br from-gray-900 to-black border border-cyan-500/30 rounded-lg p-8 hover:border-cyan-500/60 transition-all duration-500 ${
                        !isCenterCard &&
                        displayIndex >= 0 &&
                        displayIndex < itemsPerView
                          ? "-translate-y-8"
                          : ""
                      }`}
                      style={{
                        width: `calc(${100 / itemsPerView}% - ${
                          ((itemsPerView - 1) * 24) / itemsPerView
                        }px)`,
                      }}
                    >
                      {/* Icon */}
                      <div className="text-cyan-400 mb-4">{service.icon}</div>

                      {/* Title */}
                      <h3 className="text-cyan-400 text-xl font-semibold mb-4">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-cyan-500/10 hover:bg-cyan-500/20 disabled:opacity-30 disabled:cursor-not-allowed border border-cyan-500/30 rounded-full p-3 transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 text-cyan-400" />
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-cyan-500/10 hover:bg-cyan-500/20 disabled:opacity-30 disabled:cursor-not-allowed border border-cyan-500/30 rounded-full p-3 transition-all"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 text-cyan-400" />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === index
                    ? "w-8 h-2 bg-cyan-400"
                    : "w-2 h-2 bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCarousel;
function setCurrentIndex(arg0: (prev: any) => number) {
  throw new Error("Function not implemented.");
}

