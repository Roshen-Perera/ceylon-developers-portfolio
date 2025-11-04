import Image from "next/image";
import React from "react";
import ThemeToggle from "./theme";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex items-center justify-center w-full p-8 relative">
      <div>
        <div
          className="flex flex-row bg-(--navbar-background) fixed justify-between 2xl:w-[1239px] xl:w-[1015px] lg:w-[853px] md:w-[639px] sm:w-[545px] xs:w-[375px] 2xl:w-[] items-center rounded-full 
                     text-foreground border border-(--navbar-border) left-1/2 transform -translate-x-1/2"
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
          <div className="flex space-x-6 xs:text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]">
            <Link
              href="/company"
              className="hover:underline transition-all duration-200"
            >
              Company
            </Link>
            <Link
              href="/case"
              className="hover:underline transition-all duration-200"
            >
              Case Studies
            </Link>
            <Link
              href="/contact"
              className="hover:underline transition-all duration-200"
            >
              Contact
            </Link>
            <Link
              href="/services"
              className="hover:underline transition-all duration-200"
            >
              Services
            </Link>
            <Link
              href="/careers"
              className="hover:underline transition-all duration-200"
            >
              Careers
            </Link>
          </div>

          <div className="flex items-center">
            <div className="p-px rounded-[12px] bg-(--navbar-button-border)">
              <button
                className="shadow-(--navbar-button-shadow) text-card-foreground bg-(image:--navbar-button) font-medium py-5 px-6 rounded-full
                         hover:bg-popover hover:text-popover-foreground transition-all duration-200 ml- xs:text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]"
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
