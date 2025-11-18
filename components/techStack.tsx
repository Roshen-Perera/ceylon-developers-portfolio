import Image from "next/image";
import React from "react";
import { H2 } from "./typography";

const TechStack = () => {
  return (
    <div className="w-full px-4 py-8 md:py-12 lg:py-16">
      <div className="flex items-center justify-center mb-8 md:mb-12 lg:mb-16">
        <H2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2 font-medium text-center">
          <span className="font-kaushan">Technologies</span> We work with
        </H2>
      </div>
      <div className="flex justify-center overflow-hidden">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5 max-w-7xl">
          <div className="px-4 py-3 md:px-6 md:py-4 border border-gray-300 rounded-2xl flex items-center justify-center hover:shadow-lg transition-shadow">
            <Image
              src={"/assets/icons/technologies/php.png"}
              alt="php"
              width={100}
              height={100}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
            />
          </div>
          <div className="px-4 py-3 md:px-6 md:py-4 border border-gray-300 rounded-2xl flex items-center justify-center hover:shadow-lg transition-shadow">
            <Image
              src={"/assets/icons/technologies/javascript.png"}
              alt="javascript"
              width={50}
              height={50}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
            />
          </div>
          <div className="px-4 py-3 md:px-6 md:py-4 border border-gray-300 rounded-2xl flex items-center justify-center hover:shadow-lg transition-shadow">
            <Image
              src={"/assets/icons/technologies/react.png"}
              alt="react"
              width={50}
              height={50}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
            />
          </div>
          <div className="px-4 py-3 md:px-6 md:py-4 border border-gray-300 rounded-2xl flex items-center justify-center hover:shadow-lg transition-shadow">
            <Image
              src={"/assets/icons/technologies/nodejs.png"}
              alt="nodejs"
              width={50}
              height={50}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
            />
          </div>
          <div className="px-4 py-3 md:px-6 md:py-4 border border-gray-300 rounded-2xl flex items-center justify-center hover:shadow-lg transition-shadow">
            <Image
              src={"/assets/icons/technologies/go.png"}
              alt="go"
              width={50}
              height={50}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
            />
          </div>
          <div className="px-4 py-3 md:px-6 md:py-4 border border-gray-300 rounded-2xl flex items-center justify-center hover:shadow-lg transition-shadow">
            <Image
              src={"/assets/icons/technologies/python.png"}
              alt="python"
              width={50}
              height={50}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
            />
          </div>
          <div className="px-4 py-3 md:px-6 md:py-4 border border-gray-300 rounded-2xl flex items-center justify-center hover:shadow-lg transition-shadow">
            <Image
              src={"/assets/icons/technologies/dotnet.png"}
              alt="dotnet"
              width={100}
              height={100}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
            />
          </div>
          <div className="px-4 py-3 md:px-6 md:py-4 border border-gray-300 rounded-2xl flex items-center justify-center hover:shadow-lg transition-shadow">
            <Image
              src={"/assets/icons/technologies/redis.png"}
              alt="redis"
              width={50}
              height={50}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
            />
          </div>
          <div className="px-4 py-3 md:px-6 md:py-4 border border-gray-300 rounded-2xl flex items-center justify-center hover:shadow-lg transition-shadow">
            <Image
              src={"/assets/icons/technologies/ruby.png"}
              alt="ruby"
              width={50}
              height={50}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
            />
          </div>
          <div className="px-4 py-3 md:px-6 md:py-4 border border-gray-300 rounded-2xl flex items-center justify-center hover:shadow-lg transition-shadow">
            <Image
              src={"/assets/icons/technologies/postgresql.png"}
              alt="postgresql"
              width={50}
              height={50}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
            />
          </div>
          <div className="px-4 py-3 md:px-6 md:py-4 border border-gray-300 rounded-2xl flex items-center justify-center hover:shadow-lg transition-shadow">
            <Image
              src={"/assets/icons/technologies/laravel.png"}
              alt="laravel"
              width={50}
              height={50}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
            />
          </div>
          <div className="px-4 py-3 md:px-6 md:py-4 border border-gray-300 rounded-2xl flex items-center justify-center hover:shadow-lg transition-shadow">
            <Image
              src={"/assets/icons/technologies/java.png"}
              alt="java"
              width={50}
              height={50}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;