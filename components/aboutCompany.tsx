import React from "react";

const AboutCompany = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="grid grid-cols-[1fr_1fr_auto] ml-40">
        <div>
          <p className="text-7xl font-medium w-3xl">
            Discover Why{" "}
            <span className="font-kaushan"> Ceylon Developer </span> is the
            Premier Destination for Advancing Your{" "}
            <span className="font-kaushan"> Career </span>
          </p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="font-medium gap-3 text-[30px]">
            <p>We are growing fast.</p>
            <p>Flexible hours.</p>
            <p>Work from anywhere.</p>
            <p>Paid vacations.</p>
          </div>
          <p className="max-w-md text-[22px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
            justo nec ultrices dui sapien eget mi proin sed.{" "}
          </p>
          <button className="text-[22px] p-3 text-lg bg-[#17CDCA] rounded-2xl">
            About Company
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
