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
        <div className="flex flex-col items-center">
          <Image src="assets/icons/document.png" alt="Document" width={100} height={100} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 mt-12 max-w-6xl px-4"></div>
    </div>
  );
};

export default WhyChoose;
