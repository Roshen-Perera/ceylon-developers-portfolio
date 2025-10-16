import { ArrowUpRight } from 'lucide-react';
import React from 'react'

const Studies = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="grid grid-cols-2 gap-8 px-4">
        <div className="w-sm">
          <div className="flex flex-col mr-10">
            <div className="flex flex-row justify-between ">
              <div className="p-2 rounded-[1000px] border-1 border-[#17CDCA75]">
                Framer Development
              </div>
              <div className="p-2 rounded-[1000px] border-1 border-[#17CDCA75]">
                Figma Design
              </div>
            </div>
            <h2 className="text-[50px] font-bold">Saas Website</h2>
            <p className='text-left'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Viverra justo nec ultrices dui sapien eget mi proin sed. Eu
              lobortis elementum nibh tellus molestie nunc non blandit massa.
            </p>
          </div>
          <button className="bg-[#17CDCA] mt-5 text-black text-[22px] font-medium rounded-md hover:bg-cyan-500 transition-colors px-6 py-2 h-fit flex justify-center items-center gap-3">
            Book a Call <ArrowUpRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Studies