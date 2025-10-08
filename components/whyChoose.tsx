import Image from "next/image";
import React from "react";

const WhyChoose = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h1 className="text-7xl font-medium text-center">
        Why Choose
        <span className="font-kaushan"> Ceylon Developers ?</span>
      </h1>
      <div className="grid grid-cols-2 gap-8 mt-12 max-w-6xl px-4">
        <div className="p-2 border-1 rounded-[30px] border-[#17CDCA75]">
          <div className="flex flex-col items-center justify-center border-[#17CDCA] border-2 rounded-[30px] p-4 pb-8">
            <Image
              src="/assets/icons/document.png"
              alt="Document"
              width={100}
              height={100}
            />
            <h3 className="text-[30px] font-medium text-center">
              <span className="font-kaushan">Effortless </span>
              Task Management
            </h3>
            <p className="max-w-xl text-center text-[22px] mt-4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore
            </p>
          </div>
        </div>
        <div className="p-2 border-1 rounded-[30px] border-[#17CDCA75]">
          <div className="flex flex-col items-center justify-center border-[#17CDCA] border-2 rounded-[30px] p-4 pb-8">
            <Image
              src="/assets/icons/phone.png"
              alt="Document"
              className="mb-5"
              width={100}
              height={100}
            />
            <h3 className="text-[30px] font-medium text-center">
              <span className="font-kaushan">Seamless </span>
              Team Collaboration
            </h3>
            <p className="max-w-xl text-center text-[22px] mt-4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 mt-12 max-w-6xl px-4"></div>
    </div>
  );
};

export default WhyChoose;
