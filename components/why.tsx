import React from 'react'
import MeshVector2 from './meshVector2';
import Image from 'next/image';
import { Check } from 'lucide-react';

const Why = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-12">
      {/* <MeshVector /> */}
      <MeshVector2 />
      <div className="flex flex-row items-center gap-12">
        <div className="flex flex-col gap-6 flex-1 max-w-lg">
          <p className="text-7xl font-medium">
            To upscale your <span className="font-kaushan">business</span> to
            the next level
          </p>
          <p className="text-[22px] text-gray-600">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua invidunt ut labore.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-3 items-center">
              <Check/>
              <p className="text-[22px]">
                Project templates to kick-start a new project
              </p>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <Check/>
              <p className="text-[22px]">
                Clone task to speed your time to action
              </p>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <Check />
              <p className="text-[22px]">
                Communicate and collaborate with your team and clients
              </p>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <Check/>
              <p className="text-[22px]">Time tracking for the whole team</p>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0">
          <Image
            src={"/assets/images/todaysActivity.png"}
            alt={"today's activity dashboard"}
            width={686}
            height={487}
            style={{ opacity: 1 }}
          />
        </div>
      </div>
    </div>
  );
}

export default Why