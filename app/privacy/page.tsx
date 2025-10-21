import BlueGlow from '@/components/blueGlow'
import NavBar from '@/components/navBar'
import React from 'react'

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <BlueGlow />
      <NavBar />
      <div className="mt-15">
        <div className="flex flex-col mt-8 z-20 items-center">
          <p className="font-semibold text-8xl ">Privacy Policy</p>
        </div>
        <div className="text-lg mt-8 max-w-3xl flex items-center mx-auto px-4">
          <p className="text-[22px] text-center">
            Pushing the boundaries of what&apos;s possible in the digital realm.
            <br />
            Join us on this journey into the future of technology.
          </p>
        </div>
      </div>
      <div className="mt-20 max-w-6xl">
        <p className="text-[22px] ">
          Ceylon Developer is committed to protecting your privacy. This Privacy
          Policy explains how we collect, use, and protect your personal
          information when you use our services, website, and other digital
          platforms.
        </p>
        <div className="mt-10">
          <h5 className="text-[30px] text-[#17CDCA]">
            1. Information We Collect
          </h5>
          <p className="text-[22px] mt-3">
            We collect different types of information to provide and improve our
            services:
          </p>
          <ul role="list" className="mt-5 list-disc ml-6 text-[22px]">
            <li className="mt-6">
              <strong>Personal Information: </strong>When you sign up or
              interact with Ceylon Developer, we may collect personal details
              like your name, email address, and other contact information.
            </li>
            <li className="mt-6">
              <strong>Usage Data: </strong>We gather data on how you use Ceylon
              Developer, including chat logs, search history, preferences, and
              other activities within the platform
            </li>
            <li className="mt-6">
              <strong>Device Information: </strong>We collect data about the
              device you use to access Ceylon Developer, such as your IP
              address, browser type, and operating system.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Page 