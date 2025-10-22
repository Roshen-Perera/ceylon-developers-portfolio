"use client";

import React, { useState } from "react";
import Image from "next/image";

const ShowCaseWork = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Website", "App Mobile", "App Desktop"];

  const works = [
    {
      title: "Clothing Store Mobile App",
      imageUrl: "/assets/images/clothing.jpg",
      workedOn: ["Mobile App", "Admin Panel"],
      technologies: ["Figma", "Illustrator"],
      behanceLink: "#",
    },
    {
      title: "Clothing Store Mobile App",
      imageUrl: "/assets/images/borcelle.png",
      workedOn: ["Mobile App", "Admin Panel"],
      technologies: ["Figma", "Illustrator"],
      behanceLink: "#",
    },
    {
      title: "Clothing Store Mobile App",
      imageUrl: "/assets/images/weather.jpg",
      workedOn: ["Mobile App", "Admin Panel"],
      technologies: ["Figma", "Illustrator"],
      behanceLink: "#",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-7xl font-bold mt-20">Showcasing my Best Work</h1>
      <p className="text-[22px] mt-10">
        I have worked on a wide range of projects. Here are some of my projects.
      </p>
      <div className="p-4">
        {/* Tab Navigation */}
        <div className="flex gap-6 mb-8 mt-10 items-center justify-center">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-lg font-bold text-[22px] transition-all ${
                activeTab === tab
                  ? "bg-[#17CDCA] text-black"
                  : "bg-[#F7F7F7] text-black hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        {works.map((work, index) => (
        <div key={index} className=" flex gap-8 mt-12 items-center border border-gray-300 rounded-[35px] px-10 py-6">
          {/* Left Side - Image */}
          <Image
            src={work.imageUrl}
            alt="404"
            width={540}
            height={355}
            className="rounded-[35px]"
          />
          {/* Right Side - Details */}
          <div className="">
            <h3 className="text-[30px] mb-6">{work.title}</h3>

            {/* Worked On Section */}
            <div className="mb-6">
              <h4 className="text-[22px] font-bold mb-3">Worked On</h4>
              <div className="flex gap-2">
                {work.workedOn.map((item, idx) => (
                  <span key={idx} className="px-4 py-1.5 bg-[#F7F7F7] text-[#17CDCA] rounded-full text-[22px]">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Technologies Section */}
            <div className="mb-6">
              <h4 className="text-[22px] font-bold mb-3">
                Technologies I have Worked
              </h4>
              <div className="flex gap-3">
                {work.technologies.map((tech, idx) => (
                <div key={idx} className="px-4 py-1.5 rounded-full bg-[#F7F7F7] flex items-center gap-2">
                  <span className="w-4 h-4 bg-purple-500 rounded"></span>
                  <span className="text-[20px]">{tech}</span>
                </div>
                ))}
              </div>
            </div>

            {/* Go to Behance Link */}
            <a
              href={work.behanceLink}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F7F7F7] text-[22px] text-gray-700 hover:text-gray-900"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Go to Behance
            </a>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default ShowCaseWork;
