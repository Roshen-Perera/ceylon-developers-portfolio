import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h1 className="text-7xl font-medium text-center">
        Discover our <span className="font-kaushan"> Talented </span> and
        <br />
        <span className="font-kaushan"> Dedicated </span>team
      </h1>
      <div>
        <div className="flex flex-col bg-[#F7F7F7] rounded-2xl overflow-hidden max-w-xs shadow-lg">
          <Image src={"/assets/team1.jpg"} alt="Team Member" width={400} height={300} className="w-full h-64 object-cover" style={{ objectFit: "cover" }} />
        </div>
      </div>
    </div>
  );
};

export default Team;
