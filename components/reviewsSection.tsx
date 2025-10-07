import React from "react";
import Reviews from "./reviews";

const ReviewsSection = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-12">
        <h1 className="text-7xl font-medium text-center">
          Why Customers
          <span className="font-kaushan"> love </span>
          <br />
          working with us
        </h1>
        <div className="text-[22px] mt-8 max-w-2xl flex items-center mx-auto px-4">
          <p className="text-center">
            Hear directly from customers about their experiences and how webdone
            has made a difference.
          </p>
        </div>
      </div>
      <div className="flex flex-col ml-12 mt-12">
        <Reviews />
      </div>
    </>
  );
};

export default ReviewsSection;
