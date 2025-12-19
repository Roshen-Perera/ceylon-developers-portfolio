import React from 'react'
import VerticalTextSlider from './slider';
import { MoveRight } from 'lucide-react';
import { H5, P } from './typography';

const WeDoSection = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-12 px-4">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Section */}
          <div className="flex flex-col items-center xl:items-start justify-center w-full">
            <VerticalTextSlider />
            <div className="flex items-center max-w-md mt-4 w-full">
              <P className="text-center xl:text-left">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore
              </P>
            </div>
          </div>

          {/* Right Section - Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div className="bg-(--wedo-bg) bg-(image:--wedo-bg) flex flex-col vision-border p-6 text-center gap-4">
              <H5 className="md:text-[26px] font-bold">Consulting</H5>
              <P className="text-(--wedo-text) md:text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
              </P>
              <div className="flex flex-row gap-2 items-center justify-center text-[#17CDCA] mt-auto">
                <P>Get Started</P>
                <MoveRight />
              </div>
            </div>

            <div className="bg-(--wedo-bg) bg-(image:--wedo-bg) flex flex-col vision-border-middle p-6 text-center gap-4">
              <H5 className="md:text-[26px] font-bold">Implementation</H5>
              <P className="text-(--wedo-text) md:text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
              </P>
              <div className="flex flex-row gap-2 items-center justify-center text-[#17CDCA] mt-auto">
                <P>Get Started</P>
                <MoveRight />
              </div>
            </div>

            <div className="bg-(--wedo-bg) bg-(image:--wedo-bg) flex flex-col vision-border p-6 text-center gap-4">
              <H5 className="md:text-[26px] font-bold">Distribution</H5>
              <P className="text-(--wedo-text) md:text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
              </P>
              <div className="flex flex-row gap-2 items-center justify-center text-[#17CDCA] mt-auto">
                <P>Get Started</P>
                <MoveRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeDoSection