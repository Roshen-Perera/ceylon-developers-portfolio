import React from "react";
import Image from "next/image";

const ProjectMembers = () => {
  return (
    <div>
      <h1 className="text-7xl font-medium">Team Members Involved</h1>
      <div className="flex flex-row gap-10 mt-10">
        <div className="flex flex-col items-center bg-[(--member-card-bg)] p-5 rounded-2xl">
          <Image
            src={"/assets/images/michealr.png"}
            alt="michealr"
            width={322}
            height={352}
          />
          <h5 className="text-[30px] font-bold mt-3">Michael R</h5>
          <p className="text-[22px] text-[(--member-card-role)]">Software Developer</p>
        </div>
        <div className="flex flex-col items-center bg-[(--member-card-bg)] p-5 rounded-2xl">
          <Image
            src={"/assets/images/michealr.png"}
            alt="michealr"
            width={322}
            height={352}
          />
          <h5 className="text-[30px] font-bold mt-3">Michael R</h5>
          <p className="text-[22px] text-[(--member-card-role)]">Software Developer</p>
        </div>
        <div className="flex flex-col items-center bg-[(--member-card-bg)] p-5 rounded-2xl">
          <Image
            src={"/assets/images/michealr.png"}
            alt="michealr"
            width={322}
            height={352}
          />
          <h5 className="text-[30px] font-bold mt-3">Michael R</h5>
          <p className="text-[22px] text-[(--member-card-role)]">Software Developer</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectMembers;
