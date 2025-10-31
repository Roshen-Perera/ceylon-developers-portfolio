import Image from "next/image";
import React from "react";
import ThemeToggle from "./theme";

const NavBar = () => {
  return (
    <div className="flex items-center justify-center w-full p-8 relative">
      <div>
        <div
          className="flex flex-row bg-[var(--navbar-background)] fixed justify-between w-[1140px] h-16 items-center rounded-full 
                     text-foreground border border-[var(--navbar-border)] left-1/2 transform -translate-x-1/2"
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
            <a href="/contact" className="hover:underline transition-all duration-200">
              Contact
            </a>
            <a href="/services" className="hover:underline transition-all duration-200">
              Services
            </a>
            <a
              href="/careers"
              className="hover:underline transition-all duration-200"
            >
              Careers
            </a>
          </div>

          <div className="flex items-center">
            <div>
              <ThemeToggle />
            </div>
            <div className="p-[1px] rounded-[12px] bg-[var(--navbar-button-border)]">
              <button
                className="shadow-[var(--navbar-button-shadow)] text-card-foreground bg-[image:var(--navbar-button)] font-medium py-5 px-6 rounded-full
                         hover:bg-popover hover:text-popover-foreground transition-all duration-200 ml-8"
              >
                Book a Call
              </button>
            </div>
          </div>
          {/* Button */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
