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
    </div>
  );
};

export default Page;
