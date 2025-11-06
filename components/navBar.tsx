"use client";

import React, { useState } from "react";
import ThemeToggle from "./theme";
import Link from "next/link";
import { P } from "./typography";
import LogoIMG from "./logoIMG";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-center w-full p-8 relative">
      <div>
        {/* Desktop Navbar (640px and above) */}
        <div
          className="hidden sm:flex flex-row bg-(--navbar-background) fixed justify-between 2xl:w-[1239px] xl:w-[1015px] lg:w-[853px] md:w-[639px] sm:w-[545px] 2xl:h-[66px] xl:h-[65px] lg:h-[57px] md:h-[41px] sm:h-[35px] items-center rounded-full 
                     text-foreground border border-(--navbar-border) left-1/2 transform -translate-x-1/2 px-4 sm:px-6"
        >
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <LogoIMG />
            </Link>
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
                         hover:bg-popover hover:text-popover-foreground transition-all duration-200 sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]"
              >
                Book a Call
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navbar (below 640px) */}
        <div className="sm:hidden flex flex-row bg-(--navbar-background) fixed justify-between w-full items-center rounded-full text-foreground border border-(--navbar-border) left-1/2 transform -translate-x-1/2 px-4 z-50">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <LogoIMG />
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex flex-col gap-1 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="sm:hidden fixed top-20 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[375px] bg-(--navbar-background) border border-(--navbar-border) rounded-2xl p-6 z-40">
            <div className="flex flex-col space-y-4">
              <Link
                href="/company"
                className="text-foreground hover:text-primary transition-all duration-200 text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Company
              </Link>
              <Link
                href="/case"
                className="text-foreground hover:text-primary transition-all duration-200 text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-primary transition-all duration-200 text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/services"
                className="text-foreground hover:text-primary transition-all duration-200 text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/careers"
                className="text-foreground hover:text-primary transition-all duration-200 text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Careers
              </Link>
              <div className="pt-4 border-t border-(--navbar-border)">
                <button
                  className="w-full shadow-(--navbar-button-shadow) text-card-foreground bg-(image:--navbar-button) font-medium rounded-full h-[45px]
                           hover:bg-popover hover:text-popover-foreground transition-all duration-200 text-[16px]"
                >
                  Book a Call
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
