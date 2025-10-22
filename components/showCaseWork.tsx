"use client";

import React, { useState } from "react";

const ShowCaseWork = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Website", "App Mobile", "App Desktop"];

  return (
    <div className="p-4">
      {/* Tab Navigation */}
      <div className="flex gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 rounded-lg font-medium text-sm transition-all ${
              activeTab === tab
                ? "bg-cyan-400 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ShowCaseWork;
