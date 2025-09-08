import React from "react";

const NavBar = () => {
  return (
    <div className="w-full p-8 ">
      <div>
        <div className="flex flex-row justify-between h-[66px] items-center rounded-4xl text-white bg-white">
          <div className="flex items-center">
          </div>
          <div className="flex space-x-4 font-medium">
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
  text-black font-semibold py-2 px-4 rounded-4xl "
          >
            Book a Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
