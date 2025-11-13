import Image from 'next/image';
import React from 'react'
import { H2 } from './typography';

const TechStack = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <H2 className="text-7xl mt-2 font-medium">
          <span className="font-kaushan">Technologies</span> We work with
        </H2>
      </div>
      <div className="flex justify-end overflow-hidden">
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-5 mt-15">
          <div className="w-[223px] h-[92px] border border-gray-300 rounded-2xl flex items-center justify-center">
            <Image
              src={"/assets/icons/technologies/php.png"}
              alt="php"
              width={100}
              height={100}
            />
          </div>
          <div className="w-[223px] h-[92px] border border-gray-300 rounded-2xl flex items-center justify-center">
            <Image
              src={"/assets/icons/technologies/javascript.png"}
              alt="javascript"
              width={50}
              height={50}
            />
          </div>
          <div className="w-[223px] h-[92px] border border-gray-300 rounded-2xl flex items-center justify-center">
            <Image
              src={"/assets/icons/technologies/react.png"}
              alt="react"
              width={50}
              height={50}
            />
          </div>
          <div className="w-[223px] h-[92px] border border-gray-300 rounded-2xl flex items-center justify-center">
            <Image
              src={"/assets/icons/technologies/nodejs.png"}
              alt="nodejs"
              width={50}
              height={50}
            />
          </div>
          <div className="w-[223px] h-[92px] border border-gray-300 rounded-2xl flex items-center justify-center">
            <Image
              src={"/assets/icons/technologies/go.png"}
              alt="go"
              width={50}
              height={50}
            />
          </div>
          <div className="w-[223px] h-[92px] border border-gray-300 rounded-2xl flex items-center justify-center">
            <Image
              src={"/assets/icons/technologies/python.png"}
              alt="python"
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-start overflow-hidden">
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-5 mt-5">
          <div className="w-[223px] h-[92px] border border-gray-300 rounded-2xl flex items-center justify-center">
            <Image
              src={"/assets/icons/technologies/dotnet.png"}
              alt="dotnet"
              width={100}
              height={100}
            />
          </div>
          <div className="w-[223px] h-[92px] border border-gray-300 rounded-2xl flex items-center justify-center">
            <Image
              src={"/assets/icons/technologies/redis.png"}
              alt="redis"
              width={50}
              height={50}
            />
          </div>
          <div className="w-[223px] h-[92px] border border-gray-300 rounded-2xl flex items-center justify-center">
            <Image
              src={"/assets/icons/technologies/ruby.png"}
              alt="ruby"
              width={50}
              height={50}
            />
          </div>
          <div className="w-[223px] h-[92px] border border-gray-300 rounded-2xl flex items-center justify-center">
            <Image
              src={"/assets/icons/technologies/postgresql.png"}
              alt="postgresql"
              width={50}
              height={50}
            />
          </div>
          <div className="w-[223px] h-[92px] border border-gray-300 rounded-2xl flex items-center justify-center">
            <Image
              src={"/assets/icons/technologies/laravel.png"}
              alt="laravel"
              width={50}
              height={50}
            />
          </div>
          <div className="w-[223px] h-[92px] border border-gray-300 rounded-2xl flex items-center justify-center">
            <Image
              src={"/assets/icons/technologies/java.png"}
              alt="java"
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack