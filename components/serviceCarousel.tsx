"use client";

import React, { useEffect, useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { H5, P } from "./typography";

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
    title: "Testing",
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

const ServiceCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(5);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Duplicate services for infinite loop effect
  const duplicatedServices = useMemo(() => {
    return [...services, ...services, ...services];
  }, []);

  // Handle responsive items per view
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerView(1);
      } else if (width < 768) {
        setItemsPerView(2);
      } else if (width < 1024) {
        setItemsPerView(3);
      } else if (width < 1280) {
        setItemsPerView(4);
      } else if (width < 1440) {
        setItemsPerView(5);
      } else {
        setItemsPerView(6); // Show 5 full + 2 half cards
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Start from the middle set of cards
  useEffect(() => {
    setCurrentIndex(services.length);
  }, [itemsPerView]);

  // Auto-scroll with infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Reset position when reaching the end (seamless loop)
  useEffect(() => {
    // When we reach the end of the second set, instantly jump back to the start of the middle set
    if (currentIndex >= services.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(services.length);
      }, 500); // Wait for transition to complete
      
      setTimeout(() => {
        setIsTransitioning(true);
      }, 550);
    }
    // When we go below the first set, jump to the end of the middle set
    else if (currentIndex < services.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(services.length);
      }, 500);
      
      setTimeout(() => {
        setIsTransitioning(true);
      }, 550);
    }
  }, [currentIndex]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(services.length + index);
  }, []);

  return (
    <div className="flex items-center justify-center p-4 sm:p-6 lg:p-8 mx-60 overflow-hidden">
      <div className="w-full">
        <div className="relative px-2 sm:px-4">
          <div className="overflow-hidden">
            <div
              className={`flex gap-3 sm:gap-4 lg:gap-5 ${
                isTransitioning ? "transition-transform duration-500 ease-out" : ""
              }`}
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
              }}
            >
              {duplicatedServices.map((service, index) => {
                const displayIndex = (index - currentIndex + duplicatedServices.length) % duplicatedServices.length;
                const isCenterCard =
                  itemsPerView > 1 &&
                  displayIndex === Math.floor(itemsPerView / 2);
                
                // For large screens (>1440px), calculate position relative to center
                const isLargeScreen = typeof window !== 'undefined' && window.innerWidth >= 1440;
                const centerPosition = itemsPerView / 2;
                const relativePosition = displayIndex - centerPosition;
                
                // Card 1 (far left half) and Card 5 (far right half) should be elevated
                const isOuterHalfCard = isLargeScreen && (
                  Math.abs(relativePosition) > 2 && Math.abs(relativePosition) <= 2.5
                );
                
                // Cards 2 and 4 (second from edges) should be elevated
                const isSecondCard = isLargeScreen && (
                  Math.abs(relativePosition) > 1 && Math.abs(relativePosition) <= 2
                );

                return (
                  <div
                    key={`${service.id}-${index}`}
                    className={`lg:min-w-80 shrink-0 flex flex-col border-[#17CDCA] border rounded-lg p-3 sm:p-4 gap-3 sm:gap-4 transition-all duration-500 ${
                      isCenterCard
                        ? "" // Center card stays at normal position
                        : isOuterHalfCard
                        ? "-translate-y-4 sm:-translate-y-6 lg:-translate-y-8" // Outer half cards elevated like 2 & 4
                        : isSecondCard
                        ? "-translate-y-4 sm:-translate-y-6 lg:-translate-y-8" // Cards 2 & 4 elevated
                        : displayIndex >= 0 && displayIndex < itemsPerView
                        ? "-translate-y-4 sm:-translate-y-6 lg:-translate-y-8" // Default elevation for visible cards
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

                    <H5 className="text-[#17CDCA]">{service.title}</H5>

                    <P>{service.description}</P>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                (currentIndex % services.length) === index
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