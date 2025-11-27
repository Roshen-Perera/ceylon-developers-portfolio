"use client";

import React, { useEffect, useState } from "react";
import { H2, H5, P } from "./typography";
import ApproachesLight from "./approachesLight";
import ApproachesDark from "./approachesDark";

const Approach = () => {
    const [isDark, setIsDark] = useState(false);
  
    useEffect(() => {
      // Check if 'dark' class exists on html or body element
      const checkDarkMode = () => {
        setIsDark(document.documentElement.classList.contains("dark"));
      };
  
      checkDarkMode();
  
      // Optional: Listen for theme changes
      const observer = new MutationObserver(checkDarkMode); // Observe changes to the class attribute
      observer.observe(document.documentElement, {
        attributes: true, // Listen for attribute changes
        attributeFilter: ["class"], // Only listen for changes to the 'class' attribute
      });
  
      return () => observer.disconnect(); // Cleanup on unmount
    }, []);
  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <div className="text-center mb-5">
        <H2 className="text-7xl font-medium">
          Our <span className="font-kaushan">design</span> and
          <br />
          <span className="font-kaushan">development</span> approach
        </H2>
      </div>
      {isDark ? (
        <ApproachesDark />
      ) : (
        <ApproachesLight />
      )}
    </div>
  );
};

export default Approach;
