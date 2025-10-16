import React from "react";

const DiscussPost = () => {
  return (
    <>
      <div className="flex flex-col gap-7 p-7 rounded-3xl items-center max-w-5xl text-center bg-gray-100">
        <h1 className="font-medium text-7xl">
          We’re eager to <span className="font-kaushan"> Discuss </span>
          <br />
          how We can elevate <span className="font-kaushan"> Your </span>
          <br />
          <span className="font-kaushan"> Business </span>
        </h1>
        <p className="text-[22px]">
          Pushing the boundaries of what&apos;s possible in the digital realm.
          Join us on this journey into the future of technology.
        </p>
        <button className="text-[22px] w-[172px] p-3 text-lg bg-[#17CDCA] rounded-2xl">
          Get Started
        </button>
      </div>
    </>
  );
};

export default DiscussPost;
