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
      <div className="grid grid-cols-4 p-8">
        <div className="p-3 shadow-[0px_0px_15px_rgba(23,205,202,0.47)] rounded-lg">
          <div className="flex flex-col p-5 gradient-border rounded-2xl gap-4 ">
            <H5 className="text-[26px] font-bold">UX Driven Engineering</H5>
            <P className="text-[22px] text-[#585858]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit Lorem
              ipsum dolor sit amet, elit consectetur adipiscing elit.{" "}
            </P>
          </div>
        </div>
        <div></div>
        <div className="p-3 shadow-[0px_0px_15px_rgba(23,205,202,0.47)] rounded-lg">
          <div className="flex flex-col p-5 gradient-border rounded-2xl gap-4 ">
            <H5 className="text-[26px] font-bold">
              Proven Experience and Expertise
            </H5>
            <P className="text-[22px] text-[#585858]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit Lorem
              ipsum dolor sit amet, elit consectetur adipiscing elit.{" "}
            </P>
          </div>
        </div>
        <div></div>
      </div>
      <div className="grid grid-cols-4 p-8">
        <div></div>
        <div className="p-3 shadow-[0px_0px_15px_rgba(23,205,202,0.47)] rounded-lg">
          <div className="flex flex-col p-5 gradient-border rounded-2xl gap-4 ">
            <H5 className="text-[26px] font-bold">
              Developing Shared Understanding
            </H5>
            <P className="text-[22px] text-[#585858]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit Lorem
              ipsum dolor sit amet, elit consectetur adipiscing elit.{" "}
            </P>
          </div>
        </div>
        <div></div>
        <div className="p-3 shadow-[0px_0px_15px_rgba(23,205,202,0.47)] rounded-lg">
          <div className="flex flex-col p-5 gradient-border rounded-2xl gap-4 ">
            <H5 className="text-[26px] font-bold">Quality Assurance & Testing</H5>
            <p className="text-[22px] text-[#585858]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit Lorem
              ipsum dolor sit amet, elit consectetur adipiscing elit.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 p-8">
        <div className="p-3 shadow-[0px_0px_15px_rgba(23,205,202,0.47)] rounded-lg">
          <div className="flex flex-col p-5 gradient-border rounded-2xl gap-4 ">
            <p className="text-[26px] font-bold">
              Security & Intellectual Property
            </p>
            <p className="text-[22px] text-[#585858]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit Lorem
              ipsum dolor sit amet, elit consectetur adipiscing elit.{" "}
            </p>
          </div>
        </div>
        <div></div>
        <div className="p-3 shadow-[0px_0px_15px_rgba(23,205,202,0.47)] rounded-lg">
          <div className="flex flex-col p-5 gradient-border rounded-2xl gap-4 ">
            <p className="text-[26px] font-bold">Code Reviews</p>
            <p className="text-[22px] text-[#585858]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit Lorem
              ipsum dolor sit amet, elit consectetur adipiscing elit.{" "}
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Approach