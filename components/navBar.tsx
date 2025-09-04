import React from "react";

const NavBar = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">Logo</h1>
      </div>
      <div className="flex space-x-4">
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
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Book a Call
      </button>
    </div>
  );
};

export default NavBar;
