import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin, Moon } from 'lucide-react';
import React from 'react'
import ThemeToggle from './theme';
import { H5, P } from './typography';

const Footer = () => {
  return (
    <div className="mx-10 md:mx-20">
      <div className="md:grid-cols-4 grid grid-cols-3 md:gap-6 gap-3 justify-center max-w-full overflow-hidden">
        {/* Brand Section */}
        <div className="md:block hidden">
          <div className="flex items-center font-semibold gap-2 mb-4">
            <H5>HEXZYON</H5>
            <ThemeToggle />
          </div>
          <P className="leading-relaxed mb-6 text-(--footer-link)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </P>
          <div className="flex gap-3">
            <a
              href="#"
              className="w-8 h-8 rounded flex items-center justify-center hover:bg-gray-300 transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded flex items-center justify-center hover:bg-gray-300 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded flex items-center justify-center hover:bg-gray-300 transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded flex items-center justify-center hover:bg-gray-300 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <H5 className="font-semibold mb-4">Quick links</H5>
          <ul className="space-y-2 text-(--footer-link)">
            <li>
              <P>
                <a href="#">Home</a>
              </P>
            </li>
            <li>
              <P>
                <a href="#">Service</a>
              </P>
            </li>
            <li>
              <P>
                <a href="#">Projects</a>
              </P>
            </li>
            <li>
              <P>
                <a href="#">About</a>
              </P>
            </li>
            <li>
              <P>
                <a href="#">Client</a>
              </P>
            </li>
            <li>
              <P>
                <a href="#">Contact</a>
              </P>
            </li>
          </ul>
        </div>

        {/* Important */}
        <div>
          <H5 className="mb-4">Important</H5>
          <ul className="space-y-2 text-(--footer-link)">
            <li>
              <P>
                <a href="#">Career</a>
              </P>
            </li>
            <li>
              <P>
                <a href="#">Terms and Conditions</a>
              </P>
            </li>
            <li>
              <P>
                <a href="#">Privacy Policy</a>
              </P>
            </li>
            <li>
              <P>
                <a href="#">Cookies Policy</a>
              </P>
            </li>
            <li>
              <P>
                <a href="#">Social Work</a>
              </P>
            </li>
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <H5 className="mb-4">Contacts</H5>
          <ul className="space-y-3 text-(--footer-link)">
            <li className="flex items-center gap-2">
              <Phone size={16} className="mt-0.5 shrink-0" />
              <P>+223 456 789</P>
            </li>
            <li className="flex items-center gap-2 min-w-0">
              <Mail size={16} className="mt-0.5 shrink-0" />
              <P className="wrap-break-word min-w-0 overflow-wrap-anywhere">
                example@email.com
              </P>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <P>45d, example example</P>
            </li>
          </ul>
        </div>
        {/* <div className="w-[1280px] border-t-1 border-[#585858] mt-10">
          <p className="text-[#585858] mt-5 text-center text-[22px]">
            Copyright 2025 | All Rights Reserved
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Footer