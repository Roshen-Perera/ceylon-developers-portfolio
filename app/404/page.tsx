import BlueGlow from "@/components/blueGlow";
import NavBar from "@/components/navBar";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <BlueGlow />
      <NavBar />
      <Image
        src="/assets/images/404.png"
        alt="404"
        width={696.3260498046875}
        height={266.9766845703125}
        className="mt-20"
      />
      <div className="text-lg mt-10 max-w-2xl flex items-center mx-auto px-4">
        <p className="text-[22px] text-center">
          We’re sorry. the page you requested could no be found Please go back
          to the home page
        </p>
      </div>
      <div className="mt-8 flex max-w-4xl gap-10 justify-center items-center">
        <button className="text-[22px] p-3 text-lg bg-[#17CDCA] rounded-2xl">
          Back to Home
        </button>
      </div>
      
    </div>
  );
};

export default Page;
