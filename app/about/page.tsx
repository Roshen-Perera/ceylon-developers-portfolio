import BlueGlow from '@/components/blueGlow'
import DoodleReview from '@/components/doodleReview';
import Features from '@/components/features';
import Identity from '@/components/identity';
import Motto from '@/components/motto';
import NavBar from '@/components/navBar'
import Story from '@/components/story';
import SupportAndScalability from '@/components/supportAndScalability';
import WhyChoose from '@/components/whyChoose';
import React from 'react'

const Page = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <BlueGlow />
        <NavBar />
        <div className="mt-15">
          <div className="flex flex-col mt-8 z-20 items-center">
            <p className="font-semibold text-8xl ">About Us</p>
          </div>
          <div className="text-lg mt-8 max-w-2xl flex items-center mx-auto px-4">
            <p className="text-[22px] text-center">
              Pushing the boundaries of what&apos;s possible in the digital
              realm. Join us on this journey into the future of technology.
            </p>
          </div>
        </div>
        <Story />
        <WhyChoose />
        <Motto />
        <Identity />
        <div className="flex flex-row gap-7 mt-20">
          <Features />
          <SupportAndScalability />
          <DoodleReview/>
        </div>
      </div>
    </>
  );
}

export default Page