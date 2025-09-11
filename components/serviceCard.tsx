"use client";
import Image from "next/image";
import React from "react";

const ServiceCard = () => {
  return (
    <div className="flex flex-row gap-5 p-5">
      <div className="flex flex-col justify border-[#17CDCA] border-1 rounded-lg p-3 gap-4">
        <Image
          src="/assets/icons/review.jpg"
          alt="Review"
          width={40}
          height={40}
        />
        <p className="text-xl font-semibold text-[#17CDCA]">Review</p>
        <p className="text-lg">
          A Website is an extension of yourself and we can help you to express
          it properly. Your website is your number one marketing asset because
          we live in a digital age.
        </p>
      </div>

      <div className="flex flex-col justify border-[#17CDCA] border-1 rounded-lg p-3 gap-4">
        <Image
          src="/assets/icons/testing.gif"
          alt="Software Testing Service"
          width={40}
          height={40}
        />
        <p className="text-xl font-semibold text-[#17CDCA]">
          Software Testing Service
        </p>
        <p className="text-lg">
          A Website is an extension of yourself and we can help you to express
          it properly. Your website is your number one marketing asset because
          we live in a digital age.
        </p>
      </div>

      <div className="flex flex-col justify border-[#17CDCA] border-1 rounded-lg p-3 gap-4">
        <Image
          src="/assets/icons/web.gif"
          alt="Web Design & Development"
          width={40}
          height={40}
        />
        <p className="text-xl font-semibold text-[#17CDCA]">
          Web Design & Development
        </p>
        <p className="text-lg">
          A Website is an extension of yourself and we can help you to express
          it properly. Your website is your number one marketing asset because
          we live in a digital age.
        </p>
      </div>

      <div className="flex flex-col justify border-[#17CDCA] border-1 rounded-lg p-3 gap-4">
        <Image
          src="/assets/icons/mobile.gif"
          alt="Mobile App Development"
          width={40}
          height={40}
        />
        <p className="text-xl font-semibold text-[#17CDCA]">
          Mobile App Development
        </p>
        <p className="text-lg">
          A Website is an extension of yourself and we can help you to express
          it properly. Your website is your number one marketing asset because
          we live in a digital age.
        </p>
      </div>

      <div className="flex flex-col justify border-[#17CDCA] border-1 rounded-lg p-3 gap-4">
        <Image
          src="/assets/icons/ui.gif"
          alt="UI/UX Design"
          width={40}
          height={40}
        />
        <p className="text-xl font-semibold text-[#17CDCA]">UI/UX Design</p>
        <p className="text-lg">
          A Website is an extension of yourself and we can help you to express
          it properly. Your website is your number one marketing asset because
          we live in a digital age.
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
