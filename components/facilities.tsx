import React from "react";
import DotVector from "./dotVector";
import AnalyticsVector from "./analyticsVector";
import Image from "next/image";
import CodeIcon from "./codeIcon";
import WorkFlowLight from "./workFlowLight";
import { H4, P } from "./typography";

const Facilities = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <div className="hidden lg:flex flex-col gap-10">
        <div className="flex flex-row gap-10">
          <div className="2xl:w-[369px] 2xl:h-[375px] xl:w-[345px] xl:h-[350px] lg:w-[270px] lg:h-[329px]  bg-[#6F6F6F1A] border rounded-4xl overflow-hidden">
            <div className="mt-4 ml-5">
              <div className="flex flex-col gap-3">
                <H4>Projects</H4>
                <P className="text-[var(--facilities-text)] relative z-1">
                  Easily organize tasks, set deadlines, and track progress in
                  real-time with Ease.
                </P>
              </div>
              <DotVector />
            </div>
            <Image
              src={"/assets/vectors/maskGroup.png"}
              alt={""}
              width={500}
              height={200}
              className="relative bottom-45 z-1"
            />
          </div>
          <div className="2xl:w-[786px] 2xl:h-[375px] xl:w-[735px] xl:h-[350px] lg:w-[577px] lg:h-[329px]  bg-[#6F6F6F1A] border rounded-4xl overflow-hidden">
            <div className="flex ">
              <div className="mt-12 ml-3">
                <AnalyticsVector />
              </div>
              <div className=" flex flex-col gap-2 relative right-37 mt-4 z-20">
                <H4>Analytics & Reporting</H4>
                <P className="text-[var(--facilities-text)]">
                  Generate real-time reports, identify key performance
                  indicators, and make data-driven decisions for continuous
                  improvement.
                </P>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-10">
          <div className="2xl:w-[786px] 2xl:h-[375px] xl:w-[735px] xl:h-[350px] lg:w-[577px] lg:h-[329px]  bg-[#6F6F6F1A] border rounded-4xl overflow-hidden">
            <div className="flex flex-col">
              <div className="mt-4 ml-5">
                <div className="flex flex-col gap-3">
                  <H4>Your Workflow</H4>
                  <P className="text-[var(--facilities-text)] relative z-1">
                    Automate repetitive tasks and streamline your workflows with
                    our powerful automation features. Reduce manual effort,
                    eliminate errors.
                  </P>
                </div>
              </div>
              <div className="relative bottom-8 left-40">
                <WorkFlowLight />
              </div>
            </div>
          </div>
          <div className="2xl:w-[369px] 2xl:h-[375px] xl:w-[345px] xl:h-[350px] lg:w-[270px] lg:h-[329px]  bg-[#6F6F6F1A] border rounded-4xl overflow-hidden">
            <div className="relative top-1.5">
              <Image
                src={"/assets/vectors/maskGroup.png"}
                alt={""}
                width={500}
                height={200}
                className="rotate-180 overflow-hidden"
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <CodeIcon />
              </div>
            </div>
            <div className="flex flex-col gap-3 px-5 mt-3">
              <H4>Projects</H4>
              <P className="text-[var(--facilities-text)] relative z-1">
                Easily organize tasks, set deadlines, and track progress in
                real-time with Ease.
              </P>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 lg:hidden ">
        <div className="2xl:w-[786px] xl:w-[735px] lg:w-[577px] md:w-[650px] sm:w-[558px] w-[350px] bg-[#6F6F6F1A] border rounded-4xl overflow-hidden">
          <div className="flex ">
            <div className="mt-12 ml-3">
              <AnalyticsVector />
            </div>
            <div className=" flex flex-col gap-2 relative right-37 mt-4 z-20">
              <H4>Analytics & Reporting</H4>
              <P className="text-(--facilities-text)">
                Generate real-time reports, identify key performance indicators,
                and make data-driven decisions for continuous improvement.
              </P>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-10">
          <div className="2xl:w-[369px] 2xl:h-[375px] xl:w-[345px] xl:h-[350px] lg:w-[270px] lg:h-[329px] md:w-[308px] md:h-[309px] sm:w-[265px] sm:h-[280px] w-[172px] h-[287px] bg-[#6F6F6F1A] border rounded-4xl overflow-hidden">
            <div className="mt-4 ml-5">
              <div className="flex flex-col gap-3">
                <H4>Projects</H4>
                <P className="text-(--facilities-text) relative z-1">
                  Easily organize tasks, set deadlines, and track progress in
                  real-time with Ease.
                </P>
              </div>
              <DotVector />
            </div>
            <Image
              src={"/assets/vectors/maskGroup.png"}
              alt={""}
              width={500}
              height={200}
              className="relative bottom-45 z-1"
            />
          </div>
          <div className="2xl:w-[369px] 2xl:h-[375px] xl:w-[345px] xl:h-[350px] lg:w-[270px] lg:h-[329px] md:w-[308px] md:h-[309px] sm:w-[265px] sm:h-[280px] w-[172px] h-[287px] bg-[#6F6F6F1A] border rounded-4xl overflow-hidden">
            <div className="relative top-1.5">
              <Image
                src={"/assets/vectors/maskGroup.png"}
                alt={""}
                width={500}
                height={200}
                className="rotate-180 overflow-hidden"
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <CodeIcon />
              </div>
            </div>
            <div className="flex flex-col gap-3 px-5 mt-3">
              <H4>Projects</H4>
              <P className="text-(--facilities-text) relative z-1">
                Easily organize tasks, set deadlines, and track progress in
                real-time with Ease.
              </P>
            </div>
          </div>
        </div>
        <div className="2xl:w-[786px] xl:w-[735px] lg:w-[577px] md:w-[650px] sm:w-[558px] w-[350px]  bg-[#6F6F6F1A] border rounded-4xl overflow-hidden">
          <div className="flex flex-col">
            <div className="mt-4 ml-5">
              <div className="flex flex-col gap-3">
                <H4>Your Workflow</H4>
                <P className="text-(--facilities-text) relative z-1">
                  Automate repetitive tasks and streamline your workflows with
                  our powerful automation features. Reduce manual effort,
                  eliminate errors.
                </P>
              </div>
            </div>
            <div className="relative bottom-8 left-40">
              <WorkFlowLight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
