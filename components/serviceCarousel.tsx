"use client";

import React from "react";

import Image from "next/image";

const ServiceCarousel = () => {
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
      <div className="flex flex-row gap-5 p-5">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex flex-col justify border-[#17CDCA] border rounded-lg p-3 gap-4"
          >
            <Image
              src={service.icon}
              alt={service.title}
              width={40}
              height={40}
            />
            <p className="text-[26px] font-semibold text-[#17CDCA]">
              {service.title}
            </p>
            <p className="text-[22px]">{service.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServiceCarousel;
function setCurrentIndex(arg0: (prev: any) => number) {
  throw new Error("Function not implemented.");
}

