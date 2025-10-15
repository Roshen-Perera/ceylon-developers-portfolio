import Image from "next/image";
import React from "react";

const Roles = () => {
    const roles = [
        {
            title: "Software Developer",
            description:
                "We seek a skilled Software Developer to join our tech team. You will be responsible for developing and maintaining software applications. Strong programming skills and experience with various coding languages are required.",
            icon: "/assets/icons/remoteIcon.png",
            text: "Remote",
        },
    ];
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h1 className="text-7xl font-medium">
        Find the <span className="font-kaushan"> Best Role </span> for You
      </h1>
      <div className="grid grid-cols-2 ">
        <div className="flex flex-col border-1 p-8 m-8 rounded-3xl gap-6 max-w-2xl">
          <h3 className="text-[30px] font-medium">Software Developer</h3>
          <p className="text-[22px]">
            We seek a skilled Software Developer to join our tech team. You will
            be responsible for developing and maintaining software applications.
            Strong programming skills and experience with various coding
            languages are required.
          </p>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col text-[22px] gap-4">
              <div className="flex flex-row gap-2 items-center">
                <Image
                  src="/assets/icons/remoteIcon.png"
                  alt="remote"
                  width={24}
                  height={24}
                />
                <p>Remote</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <Image
                  src="/assets/icons/fullTimeIcon.png"
                  alt="fulltime"
                  width={24}
                  height={24}
                />
                <p>Full-Time</p>
              </div>
            </div>
            <div>
              <button className="text-[22px] p-3 text-lg bg-[#17CDCA] rounded-3xl">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roles;
