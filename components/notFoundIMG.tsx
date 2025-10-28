import React, { useEffect, useState } from "react";
import Image from "next/image";

const NotFoundIMG = () => {
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
        src={isDark ? "/assets/images/4042.png" : "/assets/images/404.png"}
        alt="404"
        width={696.3260498046875}
        height={266.9766845703125}
        style={{ opacity: 1 }}
      />
    </div>
  );
};

export default NotFoundIMG;
