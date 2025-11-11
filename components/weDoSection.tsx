import React from 'react'
import VerticalTextSlider from './slider';
import { MoveRight } from 'lucide-react';
import { P } from './typography';

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
          <h1 className="text-[26px] font-bold">Consulting</h1>
          <P className=" text-(--wedo-text)">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard
          </P>
          <div className="flex flex-row gap-2 items-center text-[#17CDCA] ">
            <p>Get Started</p>
            <MoveRight />
          </div>
        </div>
        <div className="bg-(--wedo-bg) bg-(image:--wedo-bg) flex flex-col vision-border-middle p-6 text-center gap-4">
          <h1 className="text-[26px] font-bold">Implementation</h1>
          <p className=" text-(--wedo-text)">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard
          </p>
          <div className="flex flex-row gap-2 items-center text-[#17CDCA] ">
            <p>Get Started</p>
            <MoveRight />
          </div>
        </div>
        <div className="bg-(--wedo-bg) bg-(image:--wedo-bg) flex flex-col vision-border p-6 text-center gap-4">
          <h1 className="text-[26px] font-bold">Distribution</h1>
          <p className=" text-(--wedo-text)">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard
          </p>
          <div className="flex flex-row gap-2 items-center text-[#17CDCA] ">
            <p>Get Started</p>
            <MoveRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeDoSection