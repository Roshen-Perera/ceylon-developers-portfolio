import NavBarPortfolio from "@/components/navBarPortfolio";
import PortfolioHero from "@/components/portfolioHero";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <NavBarPortfolio />
      </div>
      <PortfolioHero />
      
      
    </>
  );
};

export default Page;
