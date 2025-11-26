import React from "react";
import DotVector from "./dotVector";
import AnalyticsVector from "./analyticsVector";
import Image from "next/image";
import CodeIcon from "./codeIcon";
import WorkFlowLight from "./workFlow";
import { H4, P } from "./typography";
import WorkFlow from "./workFlow";

const Facilities = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-12 px-4">
      {/* Desktop Layout (lg and above) */}
      <div className="hidden lg:flex flex-col gap-10 w-full max-w-[1165px] 2xl:max-w-[1165px]">
        <div className="flex flex-row gap-10">
          <div className="2xl:w-[369px] 2xl:h-[375px] xl:w-[345px] xl:h-[350px] lg:w-[270px] lg:h-[329px] bg-[#6F6F6F1A] border rounded-4xl overflow-hidden shrink-0 flex flex-col">
            <div className="mt-4 ml-5">
              <div className="flex flex-col gap-3">
                <H4>Projects</H4>
                <P className="text-(--facilities-text)">
                  Easily organize tasks, set deadlines, and track progress in
                  real-time with Ease.
                </P>
              </div>
            </div>

            {/* Push image to bottom */}
            <div className="mt-auto relative -z-1">
              <Image
                src={"/assets/vectors/maskGroup.png"}
                alt={""}
                width={500}
                height={220}
                className="w-full transition-opacity duration-500 hover:opacity-90"
              />
              <div className="absolute bottom-0 lg:left-0 right-5">
                <Image
                  src={"/assets/vectors/projectVector.png"}
                  alt={""}
                  width={350}
                  height={220}
                  className="w-[180px] sm:w-[200px] md:w-[230px] lg:w-[250px] xl:w-[280px] 2xl:w-[320px] h-auto transition-opacity duration-500 hover:opacity-90"
                />
              </div>
            </div>
          </div>
          <div className="2xl:w-[786px] 2xl:h-[375px] xl:w-[735px] xl:h-[350px] lg:w-[577px] lg:h-[329px] bg-[#6F6F6F1A] border rounded-4xl overflow-hidden shrink-0">
            <div className="flex">
              <div className="mt-12 ml-3 shrink-0">
                
              </div>
              <div className="flex flex-col gap-2 -ml-37 mt-4 z-20">
                <H4>Analytics & Reporting</H4>
                <P className="text-(--facilities-text)">
                  Generate real-time reports, identify key performance
                  indicators, and make data-driven decisions for continuous
                  improvement.
                </P>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-10">
          <div className="2xl:w-[786px] 2xl:h-[375px] xl:w-[735px] xl:h-[350px] lg:w-[577px] lg:h-[329px] bg-[#6F6F6F1A] border rounded-4xl overflow-hidden shrink-0">
            <div className="flex flex-col">
              <div className="mt-4 mx-5">
                <div className="flex flex-col gap-3">
                  <H4>Your Workflow</H4>
                  <P className="text-[(--facilities-text)] relative z-10">
                    Automate repetitive tasks and streamline your workflows with
                    our powerful automation features. Reduce manual effort,
                    eliminate errors.
                  </P>
                </div>
              </div>
              <div className="ml-35">
                <WorkFlow />
              </div>
            </div>
          </div>
          <div className="2xl:w-[369px] 2xl:h-[375px] xl:w-[345px] xl:h-[350px] lg:w-[270px] lg:h-[329px] bg-[#6F6F6F1A] border rounded-4xl overflow-hidden shrink-0">
            <div className="relative">
              <Image
                src={"/assets/vectors/maskGroup.png"}
                alt={""}
                width={500}
                height={200}
                className="rotate-180 overflow-hidden"
              />
              <div className="p-5 absolute -top-10 left-0 right-0">
                <CodeIcon />
              </div>
            </div>
            <div className="flex flex-col gap-3 px-5 xl:mt-3 -mt-3">
              <H4>Developer Mindset</H4>
              <P className="text-[(--facilities-text)] relative z-10">
                Stay curious, embrace challenges, and keep learning to grow as a
                developer.
              </P>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Layout (below lg) */}
      <div className="flex flex-col gap-10 lg:hidden w-full">
        <div className="w-full max-w-[650px] mx-auto bg-[#6F6F6F1A] border rounded-4xl overflow-hidden">
          <div className="flex">
            <div className="mt-12 ml-3 shrink-0">
              <AnalyticsVector />
            </div>
            <div className="flex flex-col gap-2 -ml-37 mt-4 z-20 pr-4">
              <H4>Analytics & Reporting</H4>
              <P className="text-[(--facilities-text)]">
                Generate real-time reports, identify key performance indicators,
                and make data-driven decisions for continuous improvement.
              </P>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4 sm:gap-10 w-full max-w-[650px] mx-auto">
          <div className="flex-1 min-w-0 bg-[#6F6F6F1A] border rounded-4xl overflow-hidden h-[287px] sm:h-[280px] md:h-[309px]">
            <div className="mt-4 ml-3 sm:ml-5">
              <div className="flex flex-col gap-3">
                <H4>Projects</H4>
                <P className="text-[(--facilities-text)] relative z-10 pr-2">
                  Easily organize tasks, set deadlines, and track progress in
                  real-time with Ease.
                </P>
              </div>
            </div>
            <div className="mt-auto relative -z-1">
              <Image
                src={"/assets/vectors/maskGroup.png"}
                alt={""}
                width={500}
                height={220}
                className="absolute left-0 right-0 w-full transition-opacity duration-500 hover:opacity-90"
              />
              <div className="absolute top-10 left-0 right-0">
                <Image
                  src={"/assets/vectors/projectVector.png"}
                  alt={""}
                  width={350}
                  height={220}
                  className="w-[180px] sm:w-[200px] md:w-[230px] lg:w-[250px] xl:w-[280px] 2xl:w-[320px] h-auto transition-opacity duration-500 hover:opacity-90"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 min-w-0 bg-[#6F6F6F1A] border rounded-4xl overflow-hidden h-[287px] sm:h-[280px] md:h-[309px]">
            <div className="relative top-1.5">
              <Image
                src={"/assets/vectors/maskGroup.png"}
                alt={""}
                width={500}
                height={200}
                className="rotate-180 overflow-hidden"
              />
              <div className="absolute xl:p-5 top-0 left-0 w-full h-full flex items-center justify-center">
                <Image
                  src={"/assets/vectors/codeIcon.png"}
                  alt={""}
                  width={299}
                  height={217}
                  className="w-40 sm:w-[188px] md:w-[219px] lg:w-[219px] xl:w-[279px] 2xl:w-[299px] h-auto rotate-180"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 px-3 sm:px-5 mt-3">
              <H4>Developer Mindset</H4>
              <P className="text-[(--facilities-text)] relative z-10">
                Stay curious, embrace challenges, and keep learning to grow as a
                developer.
              </P>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[650px] mx-auto bg-[#6F6F6F1A] border rounded-4xl overflow-hidden">
          <div className="flex flex-col">
            <div className="mt-4 ml-5">
              <div className="flex flex-col gap-3">
                <H4>Your Workflow</H4>
                <P className="text-[(--facilities-text)] relative z-10 pr-4">
                  Automate repetitive tasks and streamline your workflows with
                  our powerful automation features. Reduce manual effort,
                  eliminate errors.
                </P>
              </div>
            </div>
            <div className="my-4 ml-20 relative left-">
              <WorkFlowLight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
