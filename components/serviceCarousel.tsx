"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { P } from "./typography";

const ServiceCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(5);

    // Handle responsive items per view
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 640) {
          setItemsPerView(1); // Mobile: 1 card
        } else if (window.innerWidth < 768) {
          setItemsPerView(2); // Small tablet: 2 cards
        } else if (window.innerWidth < 1024) {
          setItemsPerView(3); // Tablet: 3 cards
        } else if (window.innerWidth < 1280) {
          setItemsPerView(4); // Small desktop: 4 cards
        } else {
          setItemsPerView(5); // Large desktop: 5 cards
        }
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);


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
  const maxIndex = Math.max(0, services.length - itemsPerView);

  // Reset currentIndex when itemsPerView changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerView, maxIndex, currentIndex]);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) {
          return 0;
        }
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl w-full">
        <p className="text-cyan-400 text-center mb-8 sm:mb-10 lg:mb-12 text-xs sm:text-sm tracking-wide px-4">
          Join us on this journey into the future of technology.
        </p>

        <div className="relative px-2 sm:px-4">
          <div className="overflow-hidden">
            <div
              className="flex gap-3 sm:gap-4 lg:gap-5 transition-transform duration-500 ease-out"
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
                    className={`shrink-0 flex flex-col border-[#17CDCA] border rounded-lg p-3 sm:p-4 gap-3 sm:gap-4 transition-all duration-500 ${
                      !isCenterCard &&
                      displayIndex >= 0 &&
                      displayIndex < itemsPerView
                        ? "-translate-y-4 sm:-translate-y-6 lg:-translate-y-8"
                        : ""
                    }`}
                    style={{
                      width: `calc(${100 / itemsPerView}% - ${
                        ((itemsPerView - 1) * (itemsPerView === 1 ? 12 : 16)) /
                        itemsPerView
                      }px)`,
                    }}
                  >
                    <Image
                      src={service.icon}
                      alt={service.description}
                      width={40}
                      height={40}
                    />

                    <P className="text-[#17CDCA]">
                      {service.title}
                    </P>

                    <p className="text-sm sm:text-base lg:text-[22px] text-white">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
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
  );
};

export default ServiceCarousel;
function setCurrentIndex(arg0: (prev: any) => number) {
  throw new Error("Function not implemented.");
}

