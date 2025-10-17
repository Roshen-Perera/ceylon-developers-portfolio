import React from "react";
import Image from "next/image";

const ProjectMembers = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-7xl font-medium">Team Members Involved</h1>
      <div className="items-center">
        <Image
          src={"/assets/images/michealr.png"}
          alt="michealr"
          width={322}
          height={352}
        />
        <h5 className="text-[30px] font-bold">Michael R</h5>
        <p className="22px text-[22px] text-[#5C5C5C]">Software Developer</p>
      </div>
    </div>
  );
};

export default ProjectMembers;
