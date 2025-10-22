import Image from 'next/image';
import React from 'react'

const SkillsPortfolio = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-7xl font-bold mt-20">Skills</h1>
      <p className="text-[22px] mt-10">
        Here are some of my skills on which I have been working.{" "}
      </p>
      <div className="flex flex-wrap max-w-[1109px] gap-5 items-center justify-center">
        <div className="flex flex-row gap-2 rounded-[45px] py-3 px-8 border-1">
          <Image
            src="/assets/icons/technologies/html5.png"
            width={35}
            height={40}
            alt="js"
          />
          <p className="text-[30px]">HTML5</p>
        </div>
      </div>
    </div>
  );
}

export default SkillsPortfolio