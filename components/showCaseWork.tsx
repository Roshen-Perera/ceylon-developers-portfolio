"use client";

import React, { useState } from "react";

const ShowCaseWork = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Website", "App Mobile", "App Desktop"];

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-7xl font-bold">Showcasing my Best Work</h1>
      <p className="text-[22px]">
        I have worked on a wide range of projects. Here are some of my projects.
      </p>
      <div className="p-4">
        {/* Tab Navigation */}
        <div className="flex gap-2 mb-8">
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
      </div>
    </div>
  );
};

export default ShowCaseWork;
