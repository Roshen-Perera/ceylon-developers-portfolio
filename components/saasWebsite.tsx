import { Check } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const SaasWebsite = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-7xl font-medium">SaaS Website</h1>
      <p className="text-[22px] max-w-[1200px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Viverra justo nec
        ultrices dui sapien eget mi proin sed. Eu lobortis elementum nibh tellus
        molestie nunc non blandit massa. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Viverra justo nec ultrices dui sapien eget mi proin sed.
        Eu lobortis elementum nibh tellus molestie nunc non blandit massa.
      </p>
      <div className="grid grid-cols-2">
        <Image
          src="/assets/images/caseStudy.png"
          alt=""
          width={629}
          height={474}
        />
        <div className="flex flex-col gap-4 justify-center ml-5 max-w-[537px]">
          <p className="text-[22px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
            justo nec ultrices dui sapien eget mi proin sed. Eu lobortis
            elementum nibh tellus molestie nunc non blandit massa.
          </p>
          <p className="text-[22px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center">
              <Check width={18} height={14} className="text-[#17CDCA]" />
              <p className="text-[22px]">Analytics & Strategy</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Check width={18} height={14} className="text-[#17CDCA]" />
              <p className="text-[22px]">UX/UI Design</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Check width={18} height={14} className="text-[#17CDCA]" />
              <p className="text-[22px]">Branding & Identity</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Check width={18} height={14} className="text-[#17CDCA]" />
              <p className="text-[22px]">Web Development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaasWebsite
