import React from "react";
import { H2, H5, P } from "./typography";

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
          <div className="2xl:w-[413px] 2xl:h-[249px] xl:w-[390px] xl:h-[237px] lg:w-[336px] lg:h-[221px] md:w-[461px] md:h-[159px] sm:w-[434px] sm:h-[173px] xs:w-[343px] xs:h-[199px] p-4 shadow-[0px_0px_15px_rgba(23,205,202,0.47)] flex rounded-lg items-center justify-center">
            <div className="w-full h-full border">{/* Your content here */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
