import React from 'react'
import MeshVector2 from './meshVector2';
import { Check } from 'lucide-react';
import { H2, P } from './typography';
import TodaysWorkIMG from './todaysWorkIMG';

const Why = () => {  
  return (
    <div className="mx-5 flex flex-col items-center justify-center">
      <MeshVector2 />
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-12">
        <div className="flex flex-col gap-4 flex-1 max-w-lg items-center justify-center text-center md:text-left md:items-start">
          <H2 className="max-w-lg">
            To upscale your <span className="font-kaushan">business</span> to
            the next level
          </H2>
          <P>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua invidunt ut labore.
          </P>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-3 items-center">
              <div className="flex p-1 justify-center items-center rounded-[38px] border border-[#17CDCA]">
                <Check className="size-3 xl:size-4" />
              </div>
              <P>
                Project templates to kick-start a new project
              </P>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <div className="flex p-1 justify-center items-center rounded-[38px] border border-[#17CDCA]">
                <Check className="size-3 xl:size-4" />
              </div>

              <P>
                Clone task to speed your time to action
              </P>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <div className="flex p-1 justify-center items-center rounded-[38px] border border-[#17CDCA]">
                <Check className="size-3 xl:size-4" />
              </div>
              <P>
                Communicate and collaborate with your team and clients
              </P>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <div className="flex p-1 justify-center items-center rounded-[38px] border border-[#17CDCA]">
                <Check className="size-3 xl:size-4" />
              </div>
              <P>Time tracking for the whole team</P>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <TodaysWorkIMG />
        </div>
      </div>
    </div>
  );
}

export default Why