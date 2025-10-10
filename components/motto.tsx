import React from 'react'
import Image from "next/image";

const Motto = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="flex flex-row items-center gap-12">
        <div className="p-8 bg-white">
          <div className="flex gap-3 mb-8">
            <button className="px-6 py-2 bg-[#17CDCA] text-white font-medium rounded shadow-md hover:bg-teal-500 transition-colors">
              Our Mission
            </button>
            <button className="px-6 py-2 bg-[#CAFBFA] text-gray-700 font-medium rounded hover:bg-teal-100 transition-colors">
              Our Vision
            </button>
            <button className="px-6 py-2 bg-[#CAFBFA] text-gray-700 font-medium rounded hover:bg-teal-100 transition-colors">
              Our Goal
            </button>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
            Empowering Businesses to
            <br />
            Build Lasting Relationships
          </h1>

          <p className="text-gray-600 leading-relaxed max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
            justo nec ultrices dui sapien eget mi
          </p>
        </div>
        <div className="flex flex-col gap-6 flex-1 max-w-lg">
          <p className="text-7xl font-medium">
            Our <span className="font-kaushan">Story</span>
          </p>
          <p className="text-[22px] text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
            justo nec ultrices dui sapien eget mi proin sed. Eu lobortis
            elementum nibh tellus molestie nunc non blandit massa. Nisl nunc mi
            ipsum faucibus vitae aliquet nec ullamcorper.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-3 items-center">
              <Image
                src={"/assets/icons/tick.png"}
                alt={"check mark"}
                width={24}
                height={24}
                className="flex-shrink-0"
              />
              <p className="text-[22px]">Advanced AI Foundation</p>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <Image
                src={"/assets/icons/tick.png"}
                alt={"check mark"}
                width={24}
                height={24}
                className="flex-shrink-0"
              />
              <p className="text-[22px]">Purpose-Driven</p>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <Image
                src={"/assets/icons/tick.png"}
                alt={"check mark"}
                width={24}
                height={24}
                className="flex-shrink-0"
              />
              <p className="text-[22px]">Continuous Evolution</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Motto
