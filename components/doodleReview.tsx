import React from 'react'

const DoodleReview = () => {
  return (
    <div
      className="flex flex-col items-center gap-8 p-12 rounded-[24px] max-w-lg"
      style={{ boxShadow: "0px 0px 15px 5px #17CDCA78 inset" }}
    >
      <p className="text-[30px] mb-2">Reviewed on:</p>

      <div className="text-5xl font-bold mb-3">
        <span className="text-blue-500">D</span>
        <span className="text-red-500">o</span>
        <span className="text-yellow-500">o</span>
        <span className="text-blue-500">d</span>
        <span className="text-green-500">l</span>
        <span className="text-red-500">e</span>
      </div>
      <div className="flex items-center justify-center gap-1 mb-4">
        <span className="text-yellow-400 text-[22px]">★</span>
        <span className="text-yellow-400 text-[22px]">★</span>
        <span className="text-yellow-400 text-[22px]">★</span>
        <span className="text-yellow-400 text-[22px]">★</span>
        <span className="text-yellow-400 text-[22px]">★</span>
        <span className="text-[22px] text-gray-700 ml-2">4.8/5</span>
      </div>
      <button className="bg-[#17CDCA] text-black text-[22px] font-medium rounded-md hover:bg-cyan-500 transition-colors px-6 py-2 h-fit">
        Get Started Free
      </button>
    </div>
  );
}

export default DoodleReview
