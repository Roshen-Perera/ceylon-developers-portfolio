import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import React from 'react'

const Footer = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-xl font-bold">HEXZYON</h3>
            <button className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-sm">🌙</span>
            </button>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
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
          <h4 className="font-semibold text-gray-900 mb-4">Quick links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 text-sm hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 text-sm hover:text-gray-900">
                Service
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 text-sm hover:text-gray-900">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 text-sm hover:text-gray-900">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 text-sm hover:text-gray-900">
                Client
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 text-sm hover:text-gray-900">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Important */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Important</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 text-sm hover:text-gray-900">
                Career
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 text-sm hover:text-gray-900">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 text-sm hover:text-gray-900">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 text-sm hover:text-gray-900">
                Cookies Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 text-sm hover:text-gray-900">
                Social Work
              </a>
            </li>
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Contacts</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <Phone size={16} className="text-gray-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600 text-sm">+223 456 789</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={16} className="text-gray-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600 text-sm">example@email.com</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin
                size={16}
                className="text-gray-600 mt-0.5 flex-shrink-0"
              />
              <span className="text-gray-600 text-sm">
                45d, example example
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer