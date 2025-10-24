import Image from "next/image";
import React from "react";
import ThemeToggle from "./theme";

const NavBar = () => {
  return (
    <div className="flex items-center justify-center w-full p-8 relative z-30">
      <div>
        <div
          className="flex flex-row fixed justify-between w-[1140px] h-16 items-center rounded-full px-6 
                    bg-background text-foreground shadow-lg left-1/2 transform -translate-x-1/2"
        >
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/assets/icons/logo.png"
              alt="Logo"
              width={134}
              height={44}
            />
          </div>

          {/* Menu Links */}
          <div className="flex space-x-6 text-lg">
            <a
              href="/about"
              className="hover:underline transition-all duration-200"
            >
              Company
            </a>
            <a
              href="/case"
              className="hover:underline transition-all duration-200"
            >
              Case Studies
            </a>
            <a href="#" className="hover:underline transition-all duration-200">
              Contact
            </a>
            <a href="#" className="hover:underline transition-all duration-200">
              Services
            </a>
            <a
              href="/careers"
              className="hover:underline transition-all duration-200"
            >
              Careers
            </a>
          </div>

          <ThemeToggle />

          {/* Button */}
          <button
            className="h-12 bg-card text-card-foreground font-medium py-2 px-6 rounded-full border border-border
                         hover:bg-popover hover:text-popover-foreground transition-all duration-200 ml-8"
          >
            Book a Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
