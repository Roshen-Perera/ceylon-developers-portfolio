import React from "react";
import DotVector from "./dotVector";
import AnalyticsVector from "./analyticsVector";
import Image from "next/image";
import CodeIcon from "./codeIcon";
import WorkFlowLight from "./workFlowLight";
import { H4, P } from "./typography";

const Facilities = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-12 px-4 sm:px-6 lg:px-8">
      <div className="mt-20 mb-10"></div>

      {/* Container with max width for better large screen display */}
      <div className="w-full max-w-7xl">
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
          {/* First Row - Projects & Analytics on lg+, Analytics full width below lg */}
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10">
            {/* Projects Card - Hidden below lg, shown on lg+ */}
            <div className="hidden lg:block lg:w-[369px] xl:w-[369px] 2xl:w-[369px] h-auto lg:h-[329px] xl:h-[350px] 2xl:h-[375px] bg-[#6F6F6F1A] border rounded-4xl overflow-hidden">
              <div className="mt-4 ml-5 pr-5">
                <div className="flex flex-col gap-3">
                  <H4>Projects</H4>
                  <P className="text-xl xl:text-[22px] text-[var(--facilities-text)] relative z-10">
                    Easily organize tasks, set deadlines, and track progress in
                    real-time with Ease.
                  </P>
                </div>
                <div className="mt-4">
                  <DotVector />
                </div>
              </div>
              <div className="relative -bottom-20">
                <Image
                  src={"/assets/vectors/maskGroup.png"}
                  alt={"Projects visualization"}
                  width={500}
                  height={200}
                  className="relative z-0"
                />
              </div>
            </div>

            {/* Analytics Card - Full width below lg */}
            <div className="w-full lg:flex-1 h-auto min-h-[280px] sm:min-h-[320px] md:h-[329px] lg:h-[329px] xl:h-[350px] 2xl:h-[375px] bg-[#6F6F6F1A] border rounded-3xl sm:rounded-4xl overflow-hidden">
              <div className="flex flex-col sm:flex-row p-4 sm:p-6 lg:p-8">
                <div className="mb-4 sm:mb-0 sm:mr-4 lg:mr-6 flex-shrink-0">
                  <AnalyticsVector />
                </div>
                <div className="flex flex-col gap-2 sm:gap-3 relative z-20">
                  <H4>Analytics & Reporting</H4>
                  <P className="text-base sm:text-lg lg:text-xl xl:text-[22px] text-[var(--facilities-text)]">
                    Generate real-time reports, identify key performance
                    indicators, and make data-driven decisions for continuous
                    improvement.
                  </P>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Row - Projects & Integration side by side (below lg only) */}
          <div className="flex flex-col sm:flex-row lg:hidden gap-6 sm:gap-8">
            {/* Projects Card - Shown below lg */}
            <div className="w-full sm:w-1/2 h-auto min-h-[280px] sm:min-h-[300px] md:h-[309px] bg-[#6F6F6F1A] border rounded-3xl sm:rounded-4xl overflow-hidden">
              <div className="mt-4 ml-4 sm:ml-5 pr-4 sm:pr-5">
                <div className="flex flex-col gap-2 sm:gap-3">
                  <H4>Projects</H4>
                  <P className="text-base sm:text-lg md:text-xl text-[var(--facilities-text)] relative z-10">
                    Easily organize tasks, set deadlines, and track progress in
                    real-time with Ease.
                  </P>
                </div>
                <div className="mt-4">
                  <DotVector />
                </div>
              </div>
              <div className="relative -bottom-8 sm:-bottom-12 md:-bottom-16">
                <Image
                  src={"/assets/vectors/maskGroup.png"}
                  alt={"Projects visualization"}
                  width={500}
                  height={200}
                  className="w-full h-auto relative z-0"
                />
              </div>
            </div>

            {/* Integration Card - Shown below lg */}
            <div className="w-full sm:w-1/2 h-auto min-h-[280px] sm:min-h-[300px] md:h-[309px] bg-[#6F6F6F1A] border rounded-3xl sm:rounded-4xl overflow-hidden">
              <div className="relative h-32 sm:h-40 md:h-48">
                <Image
                  src={"/assets/vectors/maskGroup.png"}
                  alt={"Code background"}
                  width={500}
                  height={200}
                  className="rotate-180 w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <CodeIcon />
                </div>
              </div>
              <div className="flex flex-col gap-2 sm:gap-3 px-4 sm:px-5 mt-3 sm:mt-4 pb-4">
                <H4>Integration</H4>
                <P className="text-base sm:text-lg md:text-xl text-[var(--facilities-text)] relative z-10">
                  Seamlessly integrate with your favorite tools and platforms
                  for enhanced productivity.
                </P>
              </div>
            </div>
          </div>

          {/* Last Row - Workflow & Integration */}
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10">
            {/* Workflow Card */}
            <div className="w-full lg:flex-1 h-auto min-h-[280px] sm:min-h-[320px] md:h-[329px] lg:h-[329px] xl:h-[350px] 2xl:h-[375px] bg-[#6F6F6F1A] border rounded-3xl sm:rounded-4xl overflow-hidden">
              <div className="flex flex-col">
                <div className="mt-4 sm:mt-6 mx-4 sm:mx-5 pr-4 sm:pr-5">
                  <div className="flex flex-col gap-2 sm:gap-3">
                    <H4>Your Workflow</H4>
                    <P className="text-base sm:text-lg lg:text-xl xl:text-[22px] text-[var(--facilities-text)] relative z-10">
                      Automate repetitive tasks and streamline your workflows
                      with our powerful automation features. Reduce manual
                      effort, eliminate errors.
                    </P>
                  </div>
                </div>
                <div className="relative mt-4 sm:mt-6 md:-mt-4 lg:-mt-8 left-1/4 sm:left-1/3 md:left-40">
                  <WorkFlowLight />
                </div>
              </div>
            </div>

            {/* Integration Card - Hidden below lg, shown on lg+ */}
            <div className="hidden lg:block lg:w-[369px] xl:w-[369px] 2xl:w-[369px] h-auto lg:h-[329px] xl:h-[350px] 2xl:h-[375px] bg-[#6F6F6F1A] border rounded-4xl overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={"/assets/vectors/maskGroup.png"}
                  alt={"Code background"}
                  width={500}
                  height={200}
                  className="rotate-180 w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <CodeIcon />
                </div>
              </div>
              <div className="flex flex-col gap-3 px-5 mt-3 pb-4">
                <H4>Integration</H4>
                <P className="text-xl xl:text-[22px] text-[var(--facilities-text)] relative z-10">
                  Seamlessly integrate with your favorite tools and platforms
                  for enhanced productivity.
                </P>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
