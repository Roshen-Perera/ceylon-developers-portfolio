"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";

const StoryContainerIMG = () => {
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
    <div>
      <Image
        src={
          isDark
            ? "/assets/images/storyContainer2.png"
            : "/assets/images/storyContainer.png"
        }
        alt={"today's activity dashboard"}
        width={454.99951171875}
        height={341.2510070800781}
        style={{ opacity: 1 }}
      />
    </div>
  );
};

export default StoryContainerIMG;
