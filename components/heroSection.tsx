import React from "react";
import Image from "next/image";
import BlueFrame from "@/components/blueFrame";
import { ButtonText, H1, P } from "./typography";

const HeroSection = () => {
  return (
    <>
      <P className="px-5 py-1.25 bg-[#FFFFFF1A] lg:mt-18 sm:mt-8 border rounded-4xl">
        Bring your business to the best scale
      </P>
      <div className="flex flex-col md:mt-8 mt-4 z-20 items-center">
        <H1 className="font-semibold text-8xl ">
          Crafting <span className="text-[#17CDCA]">Digital </span>
        </H1>
        <H1 className="font-semibold text-8xl items-center">Excellence</H1>
      </div>
      <div className="lg:mt-8 mt-4 lg:max-w-2xl md:max-w-xl max-w-xs flex items-center">
        <P className="text-center">
          Pushing the boundaries of what&apos;s possible in the digital realm.
          Join us on this journey into the future of technology.
        </P>
      </div>
      <div className="lg:mt-8 mt-4 grid grid-cols-1 md:grid-cols-2 max-w-xl justify-center items-center">
        <div className="flex justify-center">
          <ButtonText className="xs:text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] px-2 py-1 bg-[#17CDCA] rounded-md mb-4">
            Learn More
          </ButtonText>
        </div>
        <div className="flex flex-row items-center gap-3">
          <Image
            src="/assets/icons/review.jpg" // place inside /public/assets/icons
            alt="Future technology"
            width={64} // w-16
            height={64} // h-16
            className="rounded-full"
          />
          <P>Trusted by over+ 20K people in the World</P>
        </div>
      </div>
      <div className="mt-10">
        <BlueFrame />
      </div>
    </>
  );
};

export default HeroSection;
