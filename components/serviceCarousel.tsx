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
    title: "Testing", // Added title for consistency
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

  // Calculate the maximum index the carousel can translate to
  const maxIndex = useMemo(() => {
    return Math.max(0, services.length - itemsPerView);
  }, [itemsPerView]);

  // Handle responsive items per view
  useEffect(() => {
    const handleResize = () => {
      // Use clientWidth for more reliable window size in Next.js/React environment
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerView(1); // Mobile: 1 card
      } else if (width < 768) {
        setItemsPerView(2); // Small tablet: 2 cards
      } else if (width < 1024) {
        setItemsPerView(3); // Tablet: 3 cards
      } else if (width < 1280) {
        setItemsPerView(4); // Small desktop: 4 cards
      } else {
        setItemsPerView(5); // Large desktop: 5 cards
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset currentIndex when itemsPerView or maxIndex changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerView, maxIndex, currentIndex]);

  // Auto-scroll effect (THE INFINITE LOOP CHANGE)
  useEffect(() => {
    if (maxIndex === 0) return; // Prevent auto-scroll if all items are visible

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        // If the current index is the last possible index, loop back to 0.
        // Otherwise, move to the next index.
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  const goToSlide = useCallback(
    (index: number) => {
      // Ensure the index is within [0, maxIndex] range
      setCurrentIndex(Math.min(index, maxIndex));
    },
    [maxIndex]
  );

  return (
    <div className="flex items-center justify-center p-4 sm:p-6 lg:p-8 mx-60 overflow-hidden">
      <div className="">
        <div className="relative px-2 sm:px-4">
          <div className="overflow-hidden">
            <div
              className="flex gap-3 sm:gap-4 lg:gap-5 transition-transform duration-500 ease-out"
              style={{
                // Calculate the percentage to translate based on current index and items per view
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
              }}
            >
              {services.map((service, index) => {
                const displayIndex = index - currentIndex;
                // Determines if the card is visually in the center of the viewport
                const isCenterCard =
                  itemsPerView > 1 &&
                  displayIndex === Math.floor(itemsPerView / 2);

                return (
                  <div
                    key={service.id}
                    className={`lg:min-w-80 shrink-0 flex flex-col border-[#17CDCA] border rounded-lg p-3 sm:p-4 gap-3 sm:gap-4 transition-all duration-500 ${
                      !isCenterCard &&
                      displayIndex >= 0 &&
                      displayIndex < itemsPerView
                        ? "-translate-y-4 sm:-translate-y-6 lg:-translate-y-8"
                        : ""
                    }`}
                    style={{
                      // Calculate card width based on itemsPerView and gap size
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
        {maxIndex > 0 && ( // Only show dots if there's more than one slide available
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
        )}
      </div>
    </div>
  );
};

export default ServiceCarousel;
