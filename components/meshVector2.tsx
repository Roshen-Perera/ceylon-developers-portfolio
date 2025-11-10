"use client"

import React, { useEffect, useState } from "react";

const MeshVector2 = () => {
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
      {isDark ? (
        <div>
          <svg
            width="1122"
            height="523"
            viewBox="0 0 1122 523"
            fill="none"
            className=" absolute left-10 -z-10 w-full h-auto max-w-[1287px]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M428.059 435.504H699.169M0.444001 12.2027L0.443976 522.444M36.592 12.2027L36.592 522.444M72.7401 12.2027L72.74 522.444M108.888 12.2027L108.888 522.444M145.036 12.2027L145.036 522.444M181.184 12.2027L181.184 522.444M217.332 12.2027L217.332 522.444M253.48 12.2027L253.48 522.444M289.628 12.2027V522.444M0.0332031 502.134H1120.62M325.776 12.2027L325.776 522.444M0.0332031 470.779H1120.62M361.924 12.2027L361.924 522.444M0.0332031 439.423H1120.62M398.072 12.2027L398.072 522.444M0.0332031 408.068H1120.62M434.22 12.2027L434.22 522.444M0.0332031 376.712H1120.62M470.369 12.2027L470.368 522.444M0.0332031 345.356H1120.62M506.517 12.2027L506.516 522.444M0.0332031 314.001H1120.62M542.665 12.2027L542.665 522.444M0.0332031 282.645H1120.62M578.813 12.2027L578.813 522.444M0.0332031 251.289H1120.62M614.961 12.2027V522.444M0.0332031 219.934H1120.62M651.109 12.2027L651.109 522.444M0.0332031 188.578H1120.62M687.257 12.2027L687.257 522.444M0.0332031 157.222H1120.62M723.405 12.2027L723.405 522.444M0.0332031 125.867H1120.62M759.553 12.2027L759.553 522.444M0.0332031 94.5112H1120.62M795.701 12.2027L795.701 522.444M0.0332031 63.1556H1120.62M831.849 12.2027L831.849 522.444M0.0332031 31.8H1120.62M867.997 12.2027V522.444M0.0332031 0.444336L1120.62 0.444336M904.145 12.2027V522.444M940.293 12.2027V522.444M976.441 12.2027V522.444M1012.59 12.2027V522.444M1048.74 12.2027V522.444M1084.89 12.2027V522.444M1121.03 12.2027V522.444"
              stroke="url(#paint0_radial_189_190)"
              stroke-width="0.888544"
            />
            <defs>
              <radialGradient
                id="paint0_radial_189_190"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="matrix(-0.0393795 314.419 -675.219 -0.0714601 560.533 230.466)"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#1DE28D" stop-opacity="0.35" />
                <stop
                  offset="0.607303"
                  stop-color="white"
                  stop-opacity="0.10138"
                />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      ) : (
        <div>
          <svg
            width="1287"
            className=" absolute left-10 -z-10"
            height="624"
            viewBox="0 0 1287 624"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M491.027 520.071H802.042M0.471264 14.056L0.471234 624M41.9399 14.056L41.9399 624M83.4086 14.056L83.4085 624M124.877 14.056L124.877 624M166.346 14.056L166.346 624M207.815 14.056L207.815 624M249.283 14.056L249.283 624M290.752 14.056L290.752 624M332.221 14.056V624M0 599.721H1285.53M373.689 14.056L373.689 624M0 562.239H1285.53M415.158 14.056L415.158 624M0 524.756H1285.53M456.627 14.056L456.627 624M0 487.274H1285.53M498.095 14.056L498.095 624M0 449.791H1285.53M539.564 14.056L539.564 624M0 412.309H1285.53M581.033 14.056L581.033 624M0 374.826H1285.53M622.501 14.056L622.501 624M0 337.343H1285.53M663.97 14.056L663.97 624M0 299.861H1285.53M705.439 14.056V624M0 262.378H1285.53M746.907 14.056L746.907 624M0 224.896H1285.53M788.376 14.056L788.376 624M0 187.413H1285.53M829.845 14.056L829.845 624M0 149.93H1285.53M871.313 14.056L871.313 624M0 112.448H1285.53M912.782 14.056L912.782 624M0 74.9652H1285.53M954.251 14.056L954.251 624M0 37.4826H1285.53M995.719 14.056V624M0 0L1285.53 0M1037.19 14.056V624M1078.66 14.056V624M1120.13 14.056V624M1161.59 14.056V624M1203.06 14.056V624M1244.53 14.056V624M1286 14.056V624"
              stroke="url(#paint0_radial_1085_1291)"
              strokeWidth="0.888544"
            />
            <defs>
              <radialGradient
                id="paint0_radial_1085_1291"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="matrix(-0.0451757 375.858 -774.604 -0.0854236 643 274.969)"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopOpacity="0.12" />
                <stop offset="1" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      )}
    </>
  );
};

export default MeshVector2;
