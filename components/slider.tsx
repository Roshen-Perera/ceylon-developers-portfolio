"use client"

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function VerticalTextSlider() {
  const words = ["Design", "Develop", "Deliver"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="flex text-center mb-8 items-center gap-3">
      {/* Left side: We */}
      <p className="text-[50px]">
        <span className="font-kaushan">We</span>
      </p>

      {/* Left Chevron */}
      <ChevronLeft size={50} className="cursor-pointer" />

      {/* Word Slider */}
      <div className="relative h-14 w-50 overflow-hidden text-center">
        <div
          className="absolute transition-all duration-700 ease-in-out"
          style={{ transform: `translateY(-${index * 3.5}rem)` }}
        >
          {words.map((word, i) => (
            <p
              key={i}
              className={`h-14 flex items-center justify-center text-[50px] font-semibold ${
                i === index ? "text-[#17CDCA]" : "text-gray-300"
              }`}
            >
              {word}
            </p>
          ))}
        </div>
      </div>

      {/* Right Chevron */}
      <ChevronRight size={50} className="cursor-pointer" />
    </div>
  );
}
