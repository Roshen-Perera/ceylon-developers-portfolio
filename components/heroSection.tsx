import React from "react";
import Image from "next/image";
import BlueFrame from "@/components/blueFrame";

const HeroSection = () => {
  return (
    <>
      <p className="text-[22px] mt-18 border-1 rounded-4xl p-2">
        Bring your business to the best scale
      </p>
      <div className="flex flex-col mt-8 z-20 items-center">
        <p className="font-semibold text-8xl ">
          Crafting <span className="text-[#17CDCA]">Digital </span>
        </p>
        <p className="font-semibold text-8xl items-center">Excellence</p>
      </div>
      <div className="text-lg mt-8 max-w-2xl flex items-center mx-auto px-4">
        <p className="text-[22px] text-center">
          Pushing the boundaries of what&apos;s possible in the digital realm.
          Join us on this journey into the future of technology.
        </p>
      </div>
      <div className="mt-8 flex max-w-4xl gap-10 justify-center items-center">
        <button className="text-[22px] p-3 text-lg bg-[#17CDCA] rounded-2xl">
          Learn More
        </button>
        <div className="flex flex-row items-center gap-3">
          <Image
            src="/assets/icons/review.jpg" // place inside /public/assets/icons
            alt="Future technology"
            width={64} // w-16
            height={64} // h-16
            className="rounded-full"
          />
          <p className="text-[22px] text-gray-800">
            Trusted by over+ 20K people in the World
          </p>
        </div>
      </div>
      <div className="mt-10">
        <BlueFrame />
      </div>
    </>
  );
};

export default HeroSection;
