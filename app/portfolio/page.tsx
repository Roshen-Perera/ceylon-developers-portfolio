import NavBarPortfolio from "@/components/navBarPortfolio";
import PortfolioHero from "@/components/portfolioHero";
import ShowCaseWork from "@/components/showCaseWork";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <NavBarPortfolio />
      </div>
      <PortfolioHero />
      <div className="flex flex-col items-center justify-center">
        <ShowCaseWork />
      </div>
    </>
  );
};

export default Page;
