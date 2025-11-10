import React from 'react'
import MeshVector2 from './meshVector2';
import { Check } from 'lucide-react';
import TodaysWorkIMG from './todaysWorkIMG';
import { H2 } from './typography';

const Why = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-12">
      {/* <MeshVector /> */}
      <MeshVector2 />
      <div className="flex flex-row items-center gap-12">
        <div className="flex flex-col gap-6 flex-1 max-w-lg">
          <H2>
            To upscale your <span className="font-kaushan">business</span> to
            the next level
          </H2>
          <p className="text-[22px]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua invidunt ut labore.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-3 items-center">
              <div className="flex w-[24px] h-[24px] justify-center items-center rounded-[38px] border border-[#17CDCA]">
                <Check size={16} />
              </div>
              <p className="text-[22px]">
                Project templates to kick-start a new project
              </p>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <div className="flex w-[24px] h-[24px] justify-center items-center rounded-[38px] border border-[#17CDCA]">
                <Check size={16} />
              </div>

              <p className="text-[22px]">
                Clone task to speed your time to action
              </p>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <div className="flex w-[24px] h-[24px] justify-center items-center rounded-[38px] border border-[#17CDCA]">
                <Check size={16} />
              </div>
              <p className="text-[22px]">
                Communicate and collaborate with your team and clients
              </p>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <div className="flex w-[24px] h-[24px] justify-center items-center rounded-[38px] border border-[#17CDCA]">
                <Check size={16} />
              </div>
              <p className="text-[22px]">Time tracking for the whole team</p>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0">
          <TodaysWorkIMG/>
        </div>
      </div>
    </div>
  );
}

export default Why