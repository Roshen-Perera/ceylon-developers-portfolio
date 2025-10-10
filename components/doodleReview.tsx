import React from 'react'

const DoodleReview = () => {
  return (
    <div
      className="flex items-start gap-8 p-12 rounded-[24px] bg-white max-w-lg"
      style={{ boxShadow: "0px 0px 15px 5px #17CDCA78 inset" }}
    >
      {/* Reviewed on text */}
      <p className="text-sm text-gray-700 mb-2">Reviewed on:</p>

      {/* Doodle logo text */}
      <div className="text-3xl font-bold mb-3">
        <span className="text-blue-500">D</span>
        <span className="text-red-500">o</span>
        <span className="text-yellow-500">o</span>
        <span className="text-blue-500">d</span>
        <span className="text-green-500">l</span>
        <span className="text-red-500">e</span>
      </div>

      {/* Star rating */}
      <div className="flex items-center justify-center gap-1 mb-4">
        <span className="text-yellow-400 text-xl">★</span>
        <span className="text-yellow-400 text-xl">★</span>
        <span className="text-yellow-400 text-xl">★</span>
        <span className="text-yellow-400 text-xl">★</span>
        <span className="text-yellow-400 text-xl">★</span>
        <span className="text-sm text-gray-700 ml-2">4.8/5</span>
      </div>

      {/* CTA Button */}
      <button className="w-full bg-cyan-400 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-cyan-500 transition-colors">
        Get Started Free
      </button>
    </div>
  );
}

export default DoodleReview
