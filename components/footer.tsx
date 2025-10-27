import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin, Moon } from 'lucide-react';
import React from 'react'
import ThemeToggle from './theme';

const Footer = () => {
  return (
    <div className="ml-12 mx-auto">
      <div className="grid grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <div className="flex items-center font-semibold gap-2 mb-4">
            <h3 className="text-[26px] font-bold">HEXZYON</h3>
            <ThemeToggle />
          </div>
          <p className="text-[22px] leading-relaxed mb-6 text-[var(--footer-link)]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              className="w-8 h-8 rounded bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
            >
              <Facebook size={16} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
            >
              <Twitter size={16} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-[26px] mb-4">Quick links</h4>
          <ul className="space-y-2 text-[var(--footer-link)]">
            <li>
              <a href="#" className="text-[22px]">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-[22px]">
                Service
              </a>
            </li>
            <li>
              <a href="#" className="text-[22px]">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="text-[22px]">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-[22px]">
                Client
              </a>
            </li>
            <li>
              <a href="#" className="text-[22px]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Important */}
        <div>
          <h4 className="font-semibold text-[26px] mb-4">Important</h4>
          <ul className="space-y-2 text-[var(--footer-link)]">
            <li>
              <a href="#" className="text-[22px]">
                Career
              </a>
            </li>
            <li>
              <a href="#" className="text-[22px]">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="#" className="text-[22px]">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-[22px]">
                Cookies Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-[22px]">
                Social Work
              </a>
            </li>
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h4 className="font-semibold text-[26px] mb-4">Contacts</h4>
          <ul className="space-y-3 text-[var(--footer-link)]">
            <li className="flex items-center gap-2">
              <Phone size={16} className="mt-0.5 flex-shrink-0" />
              <span className="text-[22px]">+223 456 789</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="mt-0.5 flex-shrink-0" />
              <span className="text-[22px]">example@email.com</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="mt-0.5 flex-shrink-0" />
              <span className="text-[22px]">45d, example example</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer