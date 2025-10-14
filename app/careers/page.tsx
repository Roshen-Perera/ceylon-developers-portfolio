import BlueGlow from "@/components/blueGlow";
import NavBar from "@/components/navBar";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <BlueGlow />
        <NavBar />
      </div>
    </>
  );
};

export default page;
