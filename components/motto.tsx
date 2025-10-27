import React from 'react'
import Image from "next/image";

const Motto = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="flex flex-row items-center gap-12">
        <div className="flex flex-col gap-10 p-8">
          <div className="flex gap-3">
            <button className="px-6 py-2 text-[22px] bg-[image:var(--mission-button)] rounded-md">
              Our Mission
            </button>
            <button className="px-6 py-2 text-[22px] bg-[image:var(--non-active-button)] rounded-md">
              Our Vision
            </button>
            <button className="px-6 py-2 text-[22px] bg-[#CAFBFA] rounded-md">
              Our Goal
            </button>
          </div>

          <h1 className="text-[30px]">
            Empowering Businesses to
            <br />
            Build Lasting Relationships
          </h1>

          <p className="leading-relaxed max-w-md text-[22px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
            justo nec ultrices dui sapien eget mi
          </p>
        </div>
        <div className="flex flex-col gap-6 flex-1">
          <Image
            src="/assets/images/motto.png"
            alt="motto"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Motto
