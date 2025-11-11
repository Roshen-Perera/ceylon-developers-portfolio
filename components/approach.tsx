import React from 'react'
import { H2, H5, P } from './typography';

const Approach = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <div className="text-center mb-8">
        <H2 className="text-7xl font-medium">
          Our <span className="font-kaushan">design</span> and
          <br />
          <span className="font-kaushan">development</span> approach
        </H2>
      </div>
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        {/* First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8">
          <div className="p-2 sm:p-2.5 md:p-3 shadow-[0px_0px_15px_rgba(23,205,202,0.47)] rounded-lg">
            <div className="flex flex-col p-3 sm:p-4 md:p-5 gradient-border rounded-2xl gap-2 sm:gap-3 md:gap-4">
              <H5 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] xl:text-[26px] font-bold">
                UX Driven Engineering
              </H5>
              <P className="text-sm sm:text-base md:text-lg lg:text-[20px] xl:text-[22px] text-[#585858]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit
                Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.
              </P>
            </div>
          </div>
          <div className="hidden lg:block"></div>
          <div className="p-2 sm:p-2.5 md:p-3 shadow-[0px_0px_15px_rgba(23,205,202,0.47)] rounded-lg">
            <div className="flex flex-col p-3 sm:p-4 md:p-5 gradient-border rounded-2xl gap-2 sm:gap-3 md:gap-4">
              <H5 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] xl:text-[26px] font-bold">
                Proven Experience and Expertise
              </H5>
              <P className="text-sm sm:text-base md:text-lg lg:text-[20px] xl:text-[22px] text-[#585858]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit
                Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.
              </P>
            </div>
          </div>
          <div className="hidden lg:block"></div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8">
          <div className="hidden lg:block"></div>
          <div className="p-2 sm:p-2.5 md:p-3 shadow-[0px_0px_15px_rgba(23,205,202,0.47)] rounded-lg">
            <div className="flex flex-col p-3 sm:p-4 md:p-5 gradient-border rounded-2xl gap-2 sm:gap-3 md:gap-4">
              <H5 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] xl:text-[26px] font-bold">
                Developing Shared Understanding
              </H5>
              <P className="text-sm sm:text-base md:text-lg lg:text-[20px] xl:text-[22px] text-[#585858]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit
                Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.
              </P>
            </div>
          </div>
          <div className="hidden lg:block"></div>
          <div className="p-2 sm:p-2.5 md:p-3 shadow-[0px_0px_15px_rgba(23,205,202,0.47)] rounded-lg">
            <div className="flex flex-col p-3 sm:p-4 md:p-5 gradient-border rounded-2xl gap-2 sm:gap-3 md:gap-4">
              <H5 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] xl:text-[26px] font-bold">
                Quality Assurance & Testing
              </H5>
              <P className="text-sm sm:text-base md:text-lg lg:text-[20px] xl:text-[22px] text-[#585858]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit
                Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.
              </P>
            </div>
          </div>
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
          <div className="p-2 sm:p-2.5 md:p-3 shadow-[0px_0px_15px_rgba(23,205,202,0.47)] rounded-lg">
            <div className="flex flex-col p-3 sm:p-4 md:p-5 gradient-border rounded-2xl gap-2 sm:gap-3 md:gap-4">
              <H5 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] xl:text-[26px] font-bold">
                Security & Intellectual Property
              </H5>
              <P className="text-sm sm:text-base md:text-lg lg:text-[20px] xl:text-[22px] text-[#585858]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit
                Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.
              </P>
            </div>
          </div>
          <div className="hidden lg:block"></div>
          <div className="p-2 sm:p-2.5 md:p-3 shadow-[0px_0px_15px_rgba(23,205,202,0.47)] rounded-lg">
            <div className="flex flex-col p-3 sm:p-4 md:p-5 gradient-border rounded-2xl gap-2 sm:gap-3 md:gap-4">
              <H5 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] xl:text-[26px] font-bold">
                Code Reviews
              </H5>
              <P className="text-sm sm:text-base md:text-lg lg:text-[20px] xl:text-[22px] text-[#585858]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit
                Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.
              </P>
            </div>
          </div>
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </div>
  );
}

export default Approach