import React from "react";

const NavBarPortfolio = () => {
  return (
    <div className="flex items-center justify-center w-full p-8 relative z-30">
      <div>
        <div className="flex flex-row fixed justify-between w-[1140px] h-16 items-center rounded-full px-6 text-black bg-white shadow-lg left-1/2 transform -translate-x-1/2">
          <div className="flex items-center">
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </div>
          <div className="flex space-x-6 text-lg">
            <a href="#" className="hover:underline transition-all duration-200">
              About
            </a>
            <a href="#" className="hover:underline transition-all duration-200">
              Projects
            </a>
            <a href="#" className="hover:underline transition-all duration-200">
              Skills
            </a>
            <a href="#" className="hover:underline transition-all duration-200">
              Achievements 
            </a>
            <a href="#" className="hover:underline transition-all duration-200">
              Contact
            </a>
          </div>
          <button className="h-12 bg-gradient-to-b from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 text-black font-medium py-2 px-6 rounded-full border border-gray-200 transition-all duration-200 ml-8">
            Github Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBarPortfolio;
