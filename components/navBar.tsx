import React from "react";

const NavBar = () => {
  return (
    <div className="w-full p-8 ">
      <div>
        <div className="flex flex-row justify-between h-[66px] items-center rounded-4xl text-black bg-white border-1">
          <div className="flex items-center">
          </div>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:underline">
              Company
            </a>
            <a href="#" className="hover:underline">
              Case Studies
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
            <a href="#" className="hover:underline">
              Services
            </a>
            <a href="#" className="hover:underline">
              Careers
            </a>
          </div>
          <button
            className="h-[68px] bg-gradient-to-b from-white to-gray-100 
  text-black font-medium py-2 px-4 rounded-4xl "
          >
            Book a Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
