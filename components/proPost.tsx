import React from 'react'

const ProPost = () => {
  return (
    <>
      <div className="flex flex-col gap-7 p-7 rounded-3xl items-center max-w-4xl text-center bg-gray-100">
        <h1 className="font-medium text-7xl">
          Ready to <span className="font-kaushan"> Manage </span> your
          <br />
          team like a pro?
        </h1>
        <p className="text-[22px]">
          Pushing the boundaries of what&apos;s possible in the digital realm.
          Join us on this journey into the future of technology.
        </p>
        <button className="text-[22px] w-[172px] p-3 text-lg bg-[#17CDCA] rounded-2xl">
          Get Started
        </button>
      </div>
    </>
  );
}

export default ProPost