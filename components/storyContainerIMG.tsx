import React, { useEffect, useState } from 'react'
import Image from 'next/image';

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
        src={"/assets/images/storyContainer.png"}
        alt={"today's activity dashboard"}
        width={686}
        height={487}
        style={{ opacity: 1 }}
      />
    </div>
  );
}

export default StoryContainerIMG