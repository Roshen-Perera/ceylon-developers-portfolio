import Image from 'next/image';
import React from 'react'

const Reviews = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md">
      {/* Header with avatar and info */}
      <div className="flex items-start gap-3 mb-4">
        {/* Avatar */}
        <Image
          src={"/assets/technologies/review.jpg"}
          alt={"ef"}
          width={20}
          height={20}
        />

        {/* Name and role */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-[26px]">Mike Johnson</h3>
          <p className="text-sm text-[18px] text-gray-500">@mikej_tech</p>
          <p className="text-sm text-[16px] text-gray-500">Saas-maker •</p>
        </div>
      </div>

      {/* Testimonial text */}
      <p className="text-gray-600 text-[22px] leading-relaxed max-w-xs">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
}

export default Reviews