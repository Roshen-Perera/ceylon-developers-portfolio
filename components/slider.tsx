"use client"

import { useEffect, useState } from "react";

export default function VerticalTextSlider() {
  const words = ["Design", "Develop", "Deploy"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); // Change every 2s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <h1 className="text-4xl font-bold text-white flex gap-2">
        We
        <span className="relative h-10 overflow-hidden inline-block">
          <span
            className="absolute transition-all duration-500 ease-in-out"
            style={{
              transform: `translateY(-${index * 2.5}rem)`,
            }}
          >
            {words.map((word, i) => (
              <div key={i} className="h-10 flex items-center">
                {word}
              </div>
            ))}
          </span>
        </span>
      </h1>
    </div>
  );
}
