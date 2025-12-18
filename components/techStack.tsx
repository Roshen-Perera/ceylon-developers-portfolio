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
      <div className="hidden lg:flex flex-col overflow-hidden gap-[13px] md:gap-3.5 lg:gap-[15px] xl:gap-[18px] 2xl:gap-5">
        <div className="marquee marquee-left gap-[13px] md:gap-3.5 lg:gap-[15px] xl:gap-[18px] 2xl:gap-5 items-start">
          <div className="flex flex-row gap-[13px] md:gap-3.5 lg:gap-[15px] xl:gap-[18px] 2xl:gap-5 items-start">
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/php.png"}
                alt="php"
                width={100}
                height={100}
                className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/javascript.png"}
                alt="javascript"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/react.png"}
                alt="react"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/nodejs.png"}
                alt="nodejs"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/go.png"}
                alt="go"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/python.png"}
                alt="python"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
          </div>
          <div className="flex flex-row gap-[13px] md:gap-3.5 lg:gap-[15px] xl:gap-[18px] 2xl:gap-5 items-start">
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/php.png"}
                alt="php"
                width={100}
                height={100}
                className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/javascript.png"}
                alt="javascript"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/react.png"}
                alt="react"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/nodejs.png"}
                alt="nodejs"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/go.png"}
                alt="go"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/python.png"}
                alt="python"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="marquee marquee-right gap-[13px] md:gap-3.5 lg:gap-[15px] xl:gap-[18px] 2xl:gap-5 items-start">
          <div className="flex flex-row gap-[13px] md:gap-3.5 lg:gap-[15px] xl:gap-[18px] 2xl:gap-5 items-end">
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/dotnet.png"}
                alt="dotnet"
                width={100}
                height={100}
                className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/redis.png"}
                alt="redis"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/ruby.png"}
                alt="ruby"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/postgresql.png"}
                alt="postgresql"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/laravel.png"}
                alt="laravel"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/java.png"}
                alt="java"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
          </div>
          <div className="flex flex-row gap-[13px] md:gap-3.5 lg:gap-[15px] xl:gap-[18px] 2xl:gap-5 items-end">
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/dotnet.png"}
                alt="dotnet"
                width={100}
                height={100}
                className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/redis.png"}
                alt="redis"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/ruby.png"}
                alt="ruby"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/postgresql.png"}
                alt="postgresql"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/laravel.png"}
                alt="laravel"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/java.png"}
                alt="java"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden flex flex-col overflow-hidden gap-[13px] md:gap-3.5 lg:gap-[15px] xl:gap-[18px] 2xl:gap-5">
        <div className="marquee marquee-left gap-[13px] md:gap-3.5 lg:gap-[15px] xl:gap-[18px] 2xl:gap-5 items-start">
          <div className="flex flex-row gap-[13px] md:gap-3.5 lg:gap-[15px] xl:gap-[18px] 2xl:gap-5 items-start">
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/php.png"}
                alt="php"
                width={100}
                height={100}
                className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/javascript.png"}
                alt="javascript"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/react.png"}
                alt="react"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/nodejs.png"}
                alt="nodejs"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/go.png"}
                alt="go"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/python.png"}
                alt="python"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
          </div>
          <div className="flex flex-row gap-[13px] md:gap-3.5 lg:gap-[15px] xl:gap-[18px] 2xl:gap-5 items-start">
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/php.png"}
                alt="php"
                width={100}
                height={100}
                className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/javascript.png"}
                alt="javascript"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/react.png"}
                alt="react"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/nodejs.png"}
                alt="nodejs"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/go.png"}
                alt="go"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/python.png"}
                alt="python"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="marquee marquee-right gap-[13px] md:gap-3.5 lg:gap-[15px] xl:gap-[18px] 2xl:gap-5 items-start">
          <div className="flex flex-row gap-[13px] md:gap-3.5 lg:gap-[15px] xl:gap-[18px] 2xl:gap-5 items-end">
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/dotnet.png"}
                alt="dotnet"
                width={100}
                height={100}
                className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/redis.png"}
                alt="redis"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/ruby.png"}
                alt="ruby"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/postgresql.png"}
                alt="postgresql"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/laravel.png"}
                alt="laravel"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/java.png"}
                alt="java"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
          </div>
          <div className="flex flex-row gap-[13px] md:gap-3.5 lg:gap-[15px] xl:gap-[18px] 2xl:gap-5 items-end">
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/dotnet.png"}
                alt="dotnet"
                width={100}
                height={100}
                className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/redis.png"}
                alt="redis"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/ruby.png"}
                alt="ruby"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/postgresql.png"}
                alt="postgresql"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/laravel.png"}
                alt="laravel"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/java.png"}
                alt="java"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="marquee marquee-left">
          <div className="flex flex-row gap-[13px] md:gap-3.5 lg:gap-[15px] xl:gap-[18px] 2xl:gap-5 items-start">
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/php.png"}
                alt="php"
                width={100}
                height={100}
                className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/javascript.png"}
                alt="javascript"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/react.png"}
                alt="react"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/nodejs.png"}
                alt="nodejs"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/go.png"}
                alt="go"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/python.png"}
                alt="python"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
          </div>
          <div className="flex flex-row gap-[13px] md:gap-3.5 lg:gap-[15px] xl:gap-[18px] 2xl:gap-5 items-start">
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/php.png"}
                alt="php"
                width={100}
                height={100}
                className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/javascript.png"}
                alt="javascript"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/react.png"}
                alt="react"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/nodejs.png"}
                alt="nodejs"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/go.png"}
                alt="go"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
            <div className="2xl:w-[223px] 2xl:h-[92px] xl:w-[196px] xl:h-[84px] lg:w-44 lg:h-[79px] md:w-[155px] md:h-[74px] sm:w-[140px] sm:h-[70px] w-[86px] h-[35px] border-[0.4px] border-gray-300 rounded-[9px] flex items-center justify-center">
              <Image
                src={"/assets/icons/technologies/python.png"}
                alt="python"
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
