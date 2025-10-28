import React from "react";
import Image from "next/image";

const HiringProcess = () => {
  const steps = [
    {
      icon: "/assets/icons/hiring/targetVector.png",
      title: "Apply with Your CV",
      description:
        "We begin by understanding your business.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      position: "right",
    },
    {
      icon: "/assets/icons/hiring/screeningVector.png",
      title: "Initial Screening",
      description:
        "We begin by understanding your business.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      position: "left",
    },
    {
      icon: "/assets/icons/hiring/skillsVector.png",
      title: "Skills Assessment",
      description:
        "We begin by understanding your business.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      position: "right",
    },
    {
      icon: "/assets/icons/hiring/interviewVector.png",
      title: "Interview Process",
      description:
        "We begin by understanding your business.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      position: "left",
    },
    {
      icon: "/assets/icons/hiring/finalVector.png",
      title: "Final Decision",
      description:
        "We begin by understanding your business.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      position: "right",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-7xl font-medium">
          Our<span className="font-kaushan"> streamlined </span> hiring process
        </h1>
        <div className="min-h-screen mt-12">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-cyan-300"></div>

              {steps.map((step, index) => {
                return (
                  <div key={index} className="relative mb-24 last:mb-0">
                    <div className="flex items-center">
                      {/* Left Side Content */}
                      <div className="w-1/2 pr-8">
                        {step.position === "left" && (
                          <div className="shadow-[0px_0px_10px_rgba(0,0,0,0.1)] rounded-[12px] border [border-image:var(--hiring-process-card-border)_var(--hiring-process-card-border-slice)] p-6">
                            {" "}
                            <div className="flex items-center gap-3 mb-3 flex-col">
                              <div>
                                <Image
                                  src={step.icon}
                                  alt={step.title}
                                  width={48}
                                  height={48}
                                />
                              </div>
                              <h3 className="text-[30px]  text-center">
                                {step.title}
                              </h3>
                              <p className="text-[22px] leading-relaxed text-center">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Center Dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                        <div className="w-4 h-4 bg-cyan-400 rounded-full border-4 border-white shadow-lg"></div>
                      </div>

                      {/* Right Side Content */}
                      <div className="w-1/2 pl-8">
                        {step.position === "right" && (
                          <div className="bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.1)] rounded-[12px] p-6">
                            <div className="flex items-center gap-3 flex-col">
                              <div>
                                <Image
                                  src={step.icon}
                                  alt={step.title}
                                  width={48}
                                  height={48}
                                />
                              </div>
                              <h3 className="text-[30px]  text-center">
                                {step.title}
                              </h3>
                              <p className="text-[22px] leading-relaxed text-center">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HiringProcess;
