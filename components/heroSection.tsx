import React from "react";
import Image from "next/image";
import BlueFrame from "@/components/blueFrame";
import { H1, P } from "./typography";

const HeroSection = () => {
  return (
    <>
      <p className="xs:text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] px-5 bg-[#FFFFFF1A] mt-18 border rounded-4xl p-2">
        Bring your business to the best scale
      </p>
      <div className="flex flex-col mt-8 z-20 items-center">
        <H1 className="font-semibold text-8xl ">
          Crafting <span className="text-[#17CDCA]">Digital </span>
        </H1>
        <H1 className="font-semibold text-8xl items-center">Excellence</H1>
      </div>
      <div className="mt-8 lg:max-w-2xl md:max-w-xl max-w-xs flex items-center">
        <P className="text-center">
          Pushing the boundaries of what&apos;s possible in the digital realm.
          Join us on this journey into the future of technology.
        </P>
      </div>
      <div className="mt-8 flex max-w-4xl gap-10 justify-center items-center">
        <button className="xs:text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] p-3 bg-[#17CDCA] rounded-2xl">
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
          <p className="xs:text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]">
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
