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
    </div>
  );
};

export default ShowCaseWork;
