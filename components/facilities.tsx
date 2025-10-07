import React from 'react'
import DotVector from './dotVector';
import AnalyticsVector from './analyticsVector';
import Image from 'next/image';

const Facilities = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <div className="mt-20 mb-10 ">
        <svg
          width="1343"
          height="58"
          viewBox="0 0 1343 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 4.82469L503.89 1.09953C512.708 1.03434 521.386 3.30247 529.045 7.67386L603.771 50.3261C611.43 54.6975 620.108 56.9657 628.927 56.9005L1343 51.6215"
            stroke="url(#paint0_linear_1085_1810)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1085_1810"
              x1="0"
              y1="29"
              x2="1343"
              y2="29"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#17CDCA" stopOpacity="0" />
              <stop offset="0.457843" stopColor="#17CDCA" />
              <stop offset="1" stopColor="#17CDCA" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-row gap-10">
          <div className="w-[369px] h-[375px] bg-[#6F6F6F1A] border-1 rounded-4xl overflow-hidden">
            <div className="mt-4 ml-5">
              <div className="flex flex-col gap-3">
                <h1 className="text-[30px]">Projects</h1>
                <p className="text-[22px] text-[#585858] relative z-1">
                  Easily organize tasks, set deadlines, and track progress in
                  real-time with Ease.
                </p>
              </div>
              <DotVector />
            </div>
            <Image
              src={"/assets/vectors/maskGroup.png"}
              alt={""}
              width={500}
              height={200}
              className="relative bottom-45 z-1"
            />
          </div>
          <div className="w-[786px] h-[375px] bg-[#6F6F6F1A] border-1 rounded-4xl overflow-hidden">
            <div className="flex ">
              <div className="mt-12 ml-3">
                <AnalyticsVector />
              </div>
              <div className=" flex flex-col gap-2 relative right-37 mt-4 z-20">
                <h1 className="text-[30px]">Analytics & Reporting</h1>
                <p className="text-[22px] w-[515px] text-[#585858]">
                  Generate real-time reports, identify key performance
                  indicators, and make data-driven decisions for continuous
                  improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-10">
          <div className="w-[786px] h-[375px] bg-[#6F6F6F1A] border-1 rounded-4xl overflow-hidden">
            <div className="flex ">
              <div className="mt-4 ml-5">
                <div className="flex flex-col gap-3">
                  <h1 className="text-[30px]">Your Workflow</h1>
                  <p className="text-[22px] w-[605px] text-[#585858] relative z-1">
                    Automate repetitive tasks and streamline your workflows with
                    our powerful automation features. Reduce manual effort,
                    eliminate errors.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[369px] h-[375px] bg-[#6F6F6F1A] border-1 rounded-4xl overflow-hidden">
            <div className="p-4">
              <div className="flex flex-col gap-3">
                <h1 className="text-[30px]">Projects</h1>
                <p className="text-[22px] text-[#585858] relative z-1">
                  Easily organize tasks, set deadlines, and track progress in
                  real-time with Ease.
                </p>
              </div>
              <DotVector />
            </div>
            <Image
              src={"/assets/vectors/maskGroup.png"}
              alt={""}
              width={500}
              height={200}
              className="relative bottom-45 z-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facilities