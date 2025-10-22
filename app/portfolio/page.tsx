import NavBarPortfolio from "@/components/navBarPortfolio";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <NavBarPortfolio />
      </div>
      <div className="flex flex-col mt-20 ml-30 max-w-[1103px] justify-center">
        <div className="flex flex-col">
          <p className="text-[22px]">️👋 Hello I am,</p>
          <h2 className="text-[50px]">UI/UX designer </h2>
          <p className="text-[22px]">
            For the past decade, I’ve been on a mission to revolutionize design
            and tech with bold creativity and cutting-edge solutions.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;
