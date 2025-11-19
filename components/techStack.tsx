import Image from "next/image";
import React from "react";
import { H2 } from "./typography";

const TechStack = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center mb-8 md:mb-12 lg:mb-16">
        <H2 className="mt-2 font-medium text-center">
          <span className="font-kaushan">Technologies</span> We work with
        </H2>
      </div>
      <div className="flex flex-col">
        <div className="grid grid-cols-6 gap-2 xs:gap-[13px] md:gap-3.5 lg:gap-[15px] xl:gap-[18px] 2xl:gap-5">
          <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] xs:w-[86px] xs:h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center hover:shadow-lg transition-shadow">
            <Image
              src={"/assets/icons/technologies/php.png"}
              alt="php"
              width={100}
              height={100}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
            />
          </div>
          <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] xs:w-[86px] xs:h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center hover:shadow-lg transition-shadow">
            <Image
              src={"/assets/icons/technologies/javascript.png"}
              alt="javascript"
              width={50}
              height={50}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
            />
          </div>
          <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] xs:w-[86px] xs:h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center hover:shadow-lg transition-shadow">
            <Image
              src={"/assets/icons/technologies/react.png"}
              alt="react"
              width={50}
              height={50}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
            />
          </div>
          <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] xs:w-[86px] xs:h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center hover:shadow-lg transition-shadow">
            <Image
              src={"/assets/icons/technologies/nodejs.png"}
              alt="nodejs"
              width={50}
              height={50}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
            />
          </div>
          <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] xs:w-[86px] xs:h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center hover:shadow-lg transition-shadow">
            <Image
              src={"/assets/icons/technologies/go.png"}
              alt="go"
              width={50}
              height={50}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
            />
          </div>
          <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] xs:w-[86px] xs:h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center hover:shadow-lg transition-shadow">
            <Image
              src={"/assets/icons/technologies/python.png"}
              alt="python"
              width={50}
              height={50}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
            />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-2 xs:gap-[13px] md:gap-3.5 lg:gap-[15px] xl:gap-[18px] 2xl:gap-5">
          <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] xs:w-[86px] xs:h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center hover:shadow-lg transition-shadow">
            <Image
              src={"/assets/icons/technologies/dotnet.png"}
              alt="dotnet"
              width={100}
              height={100}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
            />
          </div>
          <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] xs:w-[86px] xs:h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center hover:shadow-lg transition-shadow">
            <Image
              src={"/assets/icons/technologies/redis.png"}
              alt="redis"
              width={50}
              height={50}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
            />
          </div>
          <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] xs:w-[86px] xs:h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center hover:shadow-lg transition-shadow">
            <Image
              src={"/assets/icons/technologies/ruby.png"}
              alt="ruby"
              width={50}
              height={50}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
            />
          </div>
          <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] xs:w-[86px] xs:h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center hover:shadow-lg transition-shadow">
            <Image
              src={"/assets/icons/technologies/postgresql.png"}
              alt="postgresql"
              width={50}
              height={50}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
            />
          </div>
          <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] xs:w-[86px] xs:h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center hover:shadow-lg transition-shadow">
            <Image
              src={"/assets/icons/technologies/laravel.png"}
              alt="laravel"
              width={50}
              height={50}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
            />
          </div>
          <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] xs:w-[86px] xs:h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center hover:shadow-lg transition-shadow">
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