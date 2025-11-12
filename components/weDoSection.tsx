import React from 'react'
import VerticalTextSlider from './slider';
import { MoveRight } from 'lucide-react';
import { H5, P } from './typography';

const WeDoSection = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-5 mt-8 items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <VerticalTextSlider />
          <div className="flex items-center max-w-md lg:max-w-sm xl:max-w-md ml-0 lg:ml-4 mt-4">
            <P>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore
            </P>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 min-w-0 mx-4 sm:mx-4 lg:mx-0">
          <div className="bg-(--wedo-bg) bg-(image:--wedo-bg) flex flex-col vision-border p-4 sm:p-5 md:p-6 text-center gap-3 md:gap-4 flex-1">
            <H5 className="text-xl sm:text-2xl md:text-[26px] font-bold">
              Consulting
            </H5>
            <P className="text-(--wedo-text) text-sm sm:text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard
            </P>
            <div className="flex flex-row gap-2 items-center justify-center text-[#17CDCA]">
              <P>Get Started</P>
              <MoveRight />
            </div>
          </div>
          <div className="bg-(--wedo-bg) bg-(image:--wedo-bg) flex flex-col vision-border-middle p-4 sm:p-5 md:p-6 text-center gap-3 md:gap-4 flex-1">
            <H5 className="text-xl sm:text-2xl md:text-[26px] font-bold">
              Implementation
            </H5>
            <P className="text-(--wedo-text) text-sm sm:text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard
            </P>
            <div className="flex flex-row gap-2 items-center justify-center text-[#17CDCA]">
              <P>Get Started</P>
              <MoveRight />
            </div>
          </div>
          <div className="bg-(--wedo-bg) bg-(image:--wedo-bg) flex flex-col vision-border p-4 sm:p-5 md:p-6 text-center gap-3 md:gap-4 flex-1">
            <H5 className="text-xl sm:text-2xl md:text-[26px] font-bold">
              Distribution
            </H5>
            <P className="text-(--wedo-text) text-sm sm:text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard
            </P>
            <div className="flex flex-row gap-2 items-center justify-center text-[#17CDCA]">
              <P>Get Started</P>
              <MoveRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeDoSection