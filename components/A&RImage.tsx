import React, { useEffect, useState } from "react";
import Image from "next/image";

const ARImg = () => {
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
    <>
      <Image
        src={ isDark ? "/assets/vectors/A&R-dark.png" : "/assets/vectors/A&R.png"}
        alt={""}
        width={400}
        height={323}
        className="w-48 sm:w-[277px] md:w-[323px] lg:w-[293px] xl:w-[374px] 2xl:w-[400px] h-auto transition-opacity duration-500 hover:opacity-90"
      />
    </>
  );
};

export default ARImg;
