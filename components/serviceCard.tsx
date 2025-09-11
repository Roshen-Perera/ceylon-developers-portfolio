"use client"

import Image from "next/image";
import React, { useState } from "react";

const ServiceCard = () => {
  const [services] = useState([
    {
      id: 1,
      icon: "/assets/icons/review.jpg",
      title: "Review",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      id: 2,
      icon: "/assets/icons/testing.gif",
      title: "Software Testing Service",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      id: 3,
      icon: "/assets/icons/web.gif",
      title: "Web Design & Development",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      id: 4,
      icon: "/assets/icons/mobile.gif",
      title: "Mobile App Development",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      id: 5,
      icon: "/assets/icons/ui.gif",
      title: "UI/UX Design",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
  ]);

  return (
    <div className="flex flex-row gap-5 p-5">
      {services.map((service) => (
        <div
          key={service.id}
          className="flex flex-col justify border-[#17CDCA] border-1 rounded-lg p-3 gap-4"
        >
          <Image
            src={service.icon}
            alt={service.title}
            width={40}
            height={40}
          />
          <p className="text-xl font-semibold text-[#17CDCA]">{service.title}</p>
          <p className="text-lg">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
