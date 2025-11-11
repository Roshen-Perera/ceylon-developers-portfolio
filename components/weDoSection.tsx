import React from 'react'
import VerticalTextSlider from './slider';
import { MoveRight } from 'lucide-react';
import { H5, P } from './typography';

const WeDoSection = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <div className="flex flex-row ml-15 mr-15 gap-5 mt-8">
        <div className="flex flex-col justify-around">
          <VerticalTextSlider />
          <div className=" flex items-center">
            <P>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore
            </P>
          </div>
        </div>
        <div className="bg-(--wedo-bg) bg-(image:--wedo-bg) flex flex-col vision-border p-6 text-center gap-4">
          <H5 className="text-[26px] font-bold">Consulting</H5>
          <P className=" text-(--wedo-text)">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard
          </P>
          <div className="flex flex-row gap-2 items-center text-[#17CDCA] ">
            <P>Get Started</P>
            <MoveRight />
          </div>
        </div>
        <div className="bg-(--wedo-bg) bg-(image:--wedo-bg) flex flex-col vision-border-middle p-6 text-center gap-4">
          <H5 className="text-[26px] font-bold">Implementation</H5>
          <P className=" text-(--wedo-text)">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard
          </P>
          <div className="flex flex-row gap-2 items-center text-[#17CDCA] ">
            <P>Get Started</P>
            <MoveRight />
          </div>
        </div>
        <div className="bg-(--wedo-bg) bg-(image:--wedo-bg) flex flex-col vision-border p-6 text-center gap-4">
          <H5 className="text-[26px] font-bold">Distribution</H5>
          <P className=" text-(--wedo-text)">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard
          </P>
          <div className="flex flex-row gap-2 items-center text-[#17CDCA] ">
            <P>Get Started</P>
            <MoveRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeDoSection