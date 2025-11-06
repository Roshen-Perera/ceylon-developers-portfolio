"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";

const LogoIMG = () => {
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
        src={isDark ? "/assets/icons/logo.png" : "/assets/icons/logo2.png"}
        alt="Logo"
        width={134}
        height={44}
        className="2xl:scale-100 xl:scale-95 lg:scale-85 md:scale-75 sm:scale-65 scale-55 origin-left"
      />
    </div>
  );
};

export default LogoIMG;
