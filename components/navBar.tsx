import Image from "next/image";
import React from "react";
import ThemeToggle from "./theme";
import Link from "next/link";
import { P } from "./typography";
import LogoIMG from "./logoIMG";

const NavBar = () => {
  return (
    <div className="flex items-center justify-center w-full p-8 relative">
      <div>
        <div
          className="flex flex-row bg-(--navbar-background) fixed justify-between 2xl:w-[1239px] xl:w-[1015px] lg:w-[853px] md:w-[639px] sm:w-[545px] xs:w-[375px] 2xl:h-[66px] xl:h-[65px] lg:h-[57px] md:h-[41px] sm:h-[35px] items-center rounded-full 
                     text-foreground border border-(--navbar-border) left-1/2 transform -translate-x-1/2"
        >
          {/* Logo */}
          <div className="flex items-center">
            <LogoIMG/>
          </div>

          {/* Menu Links */}
          <P className="hidden lg:block whitespace-nowrap space-x-6">
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
          </P>

          <div className="flex flex-row items-center">
            {/* <ThemeToggle /> */}
            <div className="p-px rounded-[12px] bg-(--navbar-button-border)">
              <button
                className="shadow-(--navbar-button-shadow) text-card-foreground bg-(image:--navbar-button) font-medium rounded-full sm:w-[140px] md:w-[140px] lg:w-[146px] xl:w-[154px] 2xl:w-[167px] sm:h-[35px] md:h-[41px] lg:h-[57px] xl:h-[65px] 2xl:h-[66px]
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
