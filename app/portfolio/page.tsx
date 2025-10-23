import AchievementsPortfolio from "@/components/achievementsPortfolio";
import ContactPortfolio from "@/components/contactPortfolio";
import NavBarPortfolio from "@/components/navBarPortfolio";
import PortfolioHero from "@/components/portfolioHero";
import ShowCaseWork from "@/components/showCaseWork";
import SkillsPortfolio from "@/components/skillsPortfolio";
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
        <SkillsPortfolio />
        <AchievementsPortfolio />
        <ContactPortfolio />
      </div>
    </>
  );
};

export default Page;
