import React from "react";
import { Check } from "lucide-react";
import StoryContainerIMG from "./storyContainerIMG";

const Story = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="flex flex-row items-center gap-12">
        <div className="flex-shrink-0">
          <StoryContainerIMG/>
        </div>
        <div className="flex flex-col gap-6 flex-1 max-w-lg">
          <p className="text-7xl font-medium">
            Our <span className="font-kaushan">Story</span>
          </p>
          <p className="text-[22px] text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
            justo nec ultrices dui sapien eget mi proin sed. Eu lobortis
            elementum nibh tellus molestie nunc non blandit massa. Nisl nunc mi
            ipsum faucibus vitae aliquet nec ullamcorper.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-3 items-center">
              <div className="flex w-[24px] h-[24px] justify-center items-center rounded-[38px] border border-[#17CDCA]">
                <Check size={16} />
              </div>
              <p className="text-[22px]">Advanced AI Foundation</p>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <div className="flex w-[24px] h-[24px] justify-center items-center rounded-[38px] border border-[#17CDCA]">
                <Check size={16} />
              </div>
              <p className="text-[22px]">Purpose-Driven</p>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <div className="flex w-[24px] h-[24px] justify-center items-center rounded-[38px] border border-[#17CDCA]">
                <Check size={16} />
              </div>
              <p className="text-[22px]">Continuous Evolution</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
