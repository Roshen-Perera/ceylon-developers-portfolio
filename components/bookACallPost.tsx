import { ArrowUpRight } from 'lucide-react';
import React from 'react'

const BookACallPost = () => {
  return (
    <div className="flex flex-col gap-7 p-7 rounded-3xl items-center max-w-4xl text-center bg-gray-100">
      <h1 className="font-medium text-7xl">
        Let’s Turn Your
        <br />
        <span className="font-kaushan"> Dream </span> Into{" "}
        <span className="font-kaushan"> Reality </span>
      </h1>
      <p className="text-[22px]">
        Pushing the boundaries of what&apos;s possible in the digital realm.
        Join us on this journey into the future of technology.
      </p>
      <button className="bg-[#17CDCA] mt-15 text-black text-[22px] font-medium rounded-md hover:bg-cyan-500 transition-colors px-6 py-2 h-fit flex justify-center items-center gap-3">
        Book a Call <ArrowUpRight />
      </button>
    </div>
  );
}

export default BookACallPost
