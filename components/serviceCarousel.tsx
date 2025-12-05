"use client";

import React, { useEffect, useState, useCallback, useMemo } from "react";
import Image from "next/image";
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
  const [offset, setOffset] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(5);
  const [isPaused, setIsPaused] = useState(false);

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
      } else {
        setItemsPerView(5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Triple the services array for seamless infinite scroll
  const extendedServices = useMemo(() => {
    return [...services, ...services, ...services];
  }, []);

  // Continuous smooth scroll animation
  useEffect(() => {
    if (isPaused) return;

    const animate = () => {
      setOffset((prev) => {
        const newOffset = prev + 0.05; // Adjust speed here (smaller = slower)

        // Reset when we've scrolled through one complete set
        if (newOffset >= 100) {
          return 0;
        }

        return newOffset;
      });
    };

    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [offset, isPaused]);

  return (
    <div
      className="flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="w-full">
        <div className="relative px-2 sm:px-4">
          <div className="overflow-hidden">
            <div
              className="flex gap-3 sm:gap-4 lg:gap-5"
              style={{
                transform: `translateX(-${offset}%)`,
                transition: "none",
              }}
            >
              {extendedServices.map((service, index) => {
                const position =
                  (index - offset / (100 / extendedServices.length)) %
                  extendedServices.length;
                const displayIndex = Math.floor(position);
                const isCenterCard =
                  displayIndex === Math.floor(itemsPerView / 2);

                return (
                  <div
                    key={`${service.id}-${index}`}
                    className={`lg:min-w-80 shrink-0 flex flex-col border-[#17CDCA] border rounded-lg p-3 sm:p-4 gap-3 sm:gap-4 transition-transform duration-300 ${
                      !isCenterCard &&
                      displayIndex >= 0 &&
                      displayIndex < itemsPerView
                        ? "-translate-y-4 sm:-translate-y-6 lg:-translate-y-8"
                        : ""
                    }`}
                    style={{
                      width: `calc(${100 / itemsPerView}% - ${
                        ((itemsPerView - 1) * 16) / itemsPerView
                      }px)`,
                      minWidth: "280px",
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
      </div>
    </div>
  );
};

export default ServiceCarousel;
