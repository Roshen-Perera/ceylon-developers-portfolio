import React from "react";

const AboutCompany = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="grid grid-cols-2">
        <h1 className="text-7xl font-medium">
          Discover Why Ceylon Developer is the Premier Destination for Advancing
          Your Career
        </h1>
        <div className="flex flex-col items-start">
          <div>
            <p>We are growing fast.</p>
            <p>Flexible hours.</p>
            <p>Work from anywhere.</p>
            <p>Paid vacations.</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
            justo nec ultrices dui sapien eget mi proin sed.{" "}
          </p>
          <button className="text-[22px] w-[172px] p-3 text-lg bg-[#17CDCA] rounded-2xl">
            About Company
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
