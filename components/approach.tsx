import React from 'react'
import { H2, H5, P } from './typography';

const Approach = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <div className="text-center -mb-5">
        <H2 className="text-7xl font-medium">
          Our <span className="font-kaushan">design</span> and
          <br />
          <span className="font-kaushan">development</span> approach
        </H2>
      </div>
      <div className="mt-10 flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14">
        {/* First Row */}
        <div className="gap-8 sm:gap-10 md:gap-12 lg:gap-14 flex justify-center">
          <div className="2xl:w-[413px] 2xl:h-[249px]  p-2 sm:p-2.5 md:p-3 shadow-[0px_0px_15px_rgba(23,205,202,0.47)] rounded-lg">
            <div className="flex flex-col sm:pl-4 md:pl-5 py-6 gradient-border rounded-2xl gap-2 sm:gap-3 md:gap-4">
              <H5>UX Driven Engineering</H5>
              <P className="text-[#585858]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit
                Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.
              </P>
            </div>
          </div>
          <div className="2xl:w-[413px] 2xl:h-[249px] p-2 sm:p-2.5 md:p-3 shadow-[0px_0px_15px_rgba(23,205,202,0.47)] rounded-lg">
            <div className="flex flex-col pl-3 sm:pl-4 md:pl-5 p-1.5 gradient-border rounded-2xl gap-2 sm:gap-3 md:gap-4">
              <H5>Proven Experience and Expertise</H5>
              <P className="text-[#585858]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit
                Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.
              </P>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="gap-8 sm:gap-10 md:gap-12 lg:gap-14 flex justify-center">
          <div className="2xl:w-[413px] 2xl:h-[249px] xl:w-[390px] xl:h-[237px] lg:w-[390px] lg:h-[237px] p-2 sm:p-2.5 md:p-3 shadow-[0px_0px_15px_rgba(23,205,202,0.47)] rounded-lg">
            <div className="flex flex-col pl-3 sm:pl-4 md:pl-5 p-1.5 gradient-border rounded-2xl gap-2 sm:gap-3 md:gap-4">
              <H5>Developing Shared Understanding</H5>
              <P className="text-[#585858]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit
                Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.
              </P>
            </div>
          </div>
          <div className="2xl:w-[413px] 2xl:h-[249px] p-2 sm:p-2.5 md:p-3 shadow-[0px_0px_15px_rgba(23,205,202,0.47)] rounded-lg">
            <div className="flex flex-col sm:pl-4 md:pl-5 py-6  gradient-border rounded-2xl gap-2 sm:gap-3 md:gap-4">
              <H5>Quality Assurance & Testing</H5>
              <P className="text-[#585858]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit
                Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.
              </P>
            </div>
          </div>
        </div>

        {/* Third Row */}
        <div className=" gap-8 sm:gap-10 md:gap-12 lg:gap-14 flex justify-center">
          <div className="2xl:w-[413px] 2xl:h-[249px] p-2 sm:p-2.5 md:p-3 shadow-[0px_0px_15px_rgba(23,205,202,0.47)] rounded-lg">
            <div className="flex flex-col sm:pl-4 md:pl-5 py-6  gradient-border rounded-2xl gap-2 sm:gap-3 md:gap-4">
              <H5>Security & Intellectual Property</H5>
              <P className="text-[#585858]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit
                Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.
              </P>
            </div>
          </div>
          <div className="2xl:w-[413px] 2xl:h-[249px] p-2 sm:p-2.5 md:p-3 shadow-[0px_0px_15px_rgba(23,205,202,0.47)] rounded-lg">
            <div className="flex flex-col sm:pl-4 md:pl-5 py-6  gradient-border rounded-2xl gap-2 sm:gap-3 md:gap-4">
              <H5>Code Reviews</H5>
              <P className="text-[#585858]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit
                Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.
              </P>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Approach