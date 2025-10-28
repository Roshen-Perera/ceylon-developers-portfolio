import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const Studies = () => {
    const studies = [
        {
            title: "Saas Website",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra justo nec ultrices dui sapien eget mi proin sed. Eu lobortis elementum nibh tellus molestie nunc non blandit massa.",
            tags: ["Framer Development", "Figma Design"],
            imageUrl: "/assets/images/casestudy.png",
        },
        {
            title: "Saas Website",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra justo nec ultrices dui sapien eget mi proin sed. Eu lobortis elementum nibh tellus molestie nunc non blandit massa.",
            tags: ["Framer Development", "Figma Design"],
            imageUrl: "/assets/images/casestudy.png",
        },
        {
            title: "Saas Website",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra justo nec ultrices dui sapien eget mi proin sed. Eu lobortis elementum nibh tellus molestie nunc non blandit massa.",
            tags: ["Framer Development", "Figma Design"],
            imageUrl: "/assets/images/casestudy.png",
        },
    ];
  return (
    <div className="flex flex-col items-center justify-center mt-20">
        {studies.map((study, index) => (
      <div key={index} className="grid grid-cols-2 px-8 py-8 rounded-[24px] mb-5 shadow-[0px_2px_4px_0px_#00000040] border items-center">
        <div className="w-sm">
          <div className="flex flex-col mr-10">
            <div className="flex flex-row justify-between ">
              <div className="p-2 rounded-[1000px] border-1 border-[#17CDCA75]">
                {study.tags[0]}
              </div>
              <div className="p-2 rounded-[1000px] border-1 border-[#17CDCA75]">
                {study.tags[1]}
              </div>
            </div>
            <h2 className="text-[50px] font-bold">{study.title}</h2>
            <p className="text-left">
              {study.description}
            </p>
          </div>
          <button className="bg-[#17CDCA] mt-5 text-black text-[22px] font-medium rounded-md hover:bg-cyan-500 transition-colors px-6 py-2 h-fit flex justify-center items-center gap-3">
            View Details <ArrowUpRight />
          </button>
        </div>
        <div>
            <Image src={study.imageUrl} alt={`case-study-${index + 1}`} width={400} height={200} className="rounded-[24px]" />
        </div>
      </div>
        ))}
    </div>
  );
}

export default Studies