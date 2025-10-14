import { Building2, Mail, Phone } from 'lucide-react';
import React from 'react'

const ContactDetails = () => {
  return (
    <div className="flex flex-row items-center justify-center mt-12">
      <div className="flex flex-row gap-20">
        <div className="flex flex-col items-center gap-4">
          <div className="p-4 bg-[#17CDCA] rounded-4xl">
            <Mail size={20} color="#000000" />
          </div>
          <div className="text-center">
            <h3 className="text-[26px] font-medium">Email</h3>
            <p className="text-[22px]">customer@gmail.com</p>
            <p className="text-[22px]">client@automx.com</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="p-4 bg-[#17CDCA] rounded-4xl">
            <Phone size={20} color="#000000" />
          </div>
          <div className="text-center">
            <h3 className="text-[26px] font-medium">Phone</h3>
            <p className="text-[22px]">+94 71 5672 890</p>
            <p className="text-[22px]">+94 11 5672 890</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="p-4 bg-[#17CDCA] rounded-4xl">
            <Building2 size={20} color="#000000" />
          </div>
          <div className="text-center">
            <h3 className="text-[26px] font-medium">Head Office</h3>
            <p className="text-[22px]">5899 Alexys</p>
            <p className="text-[22px]">Highway Suite 678,</p>
            <p className="text-[22px]">NR, Nevada, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails
