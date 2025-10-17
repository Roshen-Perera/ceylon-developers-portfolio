import BlueGlow from '@/components/blueGlow';
import NavBar from '@/components/navBar';
import ProjectInfo from '@/components/projectInfo';
import Image from 'next/image';
import React from 'react'

const Page = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <BlueGlow />
        <NavBar />
        <div className="mt-15">
          <div className="flex flex-col mt-8 z-20 items-center">
            <p className="font-semibold text-8xl ">Project Details</p>
          </div>
          <div className="text-lg mt-8 max-w-2xl flex items-center mx-auto px-4">
            <p className="text-[22px] text-center">
              Pushing the boundaries of what&apos;s possible in the digital
              realm. Join us on this journey into the future of technology.
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/assets/images/caseStudy.png"
            alt=""
            width={1200}
            height={960}
            className="mt-20"
          />
        </div>
      </div>
      <div className='mt-10 ml-20'>
        <ProjectInfo />
      </div>
    </>
  );
}

export default Page
