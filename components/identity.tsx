import Image from "next/image";
import React from "react";

const Identity = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="flex flex-row items-center gap-12">
        <div className="flex flex-col gap-6 flex-1 max-w-lg">
          <p className="text-7xl font-medium">
            The identity of
            <br />
            <span className="font-kaushan"> our brand</span>
          </p>
          <p className="text-[22px] text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div
          className="p-8"
          style={{ boxShadow: "0px 0px 15px 5px #17CDCA78 inset" }}
        >
          <div className="flex gap-20 mb-4">
            <div className="flex-shrink-0">
              <div className="text-[50px] font-medium text-[#17CDCA] mb-2">
                250+
              </div>
              <div className="text-[22px] mb-3">
                Experienced IT
                <br />
                Experts
              </div>
              <div className="text-[22px] w-32">
                “Reduce operational costs while accessing”
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-[30px] text-gray-900 mb-2">
                Cost Efficiency
              </h3>
              <p className="text-[22px] w-72">
                Requires less upfront investment than traditional CRM systems.
              </p>
              <div className="flex justify-between">
                <Image
                  src="/assets/icons/people2.png"
                  alt="arrow right"
                  width={100}
                  height={100}
                  className="mt-4"
                />
                <button className="px-4 py-1.5 bg-cyan-400 text-white text-xs font-medium rounded-md hover:bg-cyan-500 transition-colors">
                  Get Proposal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Identity;
