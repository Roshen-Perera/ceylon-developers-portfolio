import React from "react";
import Image from "next/image";

const TechNav = () => {
  return (
    <div>
      <div className="grid grid-cols-5">
        <h3 className="text-[30px]">Fronted</h3>
        <h3 className="text-[30px]">Backend</h3>
        <h3 className="text-[30px]">Vcs</h3>
        <h3 className="text-[30px]">Hosting/Deployement</h3>
      </div>
      <div className="flex flex-row mt-10">
        <div className="w-[223px] h-[92px] border border-gray-300 rounded-2xl flex items-center justify-center">
          <Image
            src={"/assets/icons/technologies/javascript.png"}
            alt="javascript"
            width={50}
            height={50}
          />
        </div>
        <div className="w-[223px] h-[92px] border border-gray-300 rounded-2xl flex items-center justify-center">
          <Image
            src={"/assets/icons/technologies/react.png"}
            alt="react"
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
};

export default TechNav;
