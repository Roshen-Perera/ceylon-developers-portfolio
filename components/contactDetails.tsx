import { Mail } from 'lucide-react';
import React from 'react'

const ContactDetails = () => {
  return (
    <div className="flex flex-row items-center justify-center mt-12">
      <div className="flex flex-col items-center justify-center gap-4 mx-8">
        <div className="flex flex-col items-center gap-4">
          <div className="p-4 bg-[#17CDCA] rounded-4xl">
            <Mail size={20} color="#00FFFF" />
          </div>
          <div className="space-y-2">
            <h3 className="text-[26px] font-medium text-gray-800">Email</h3>
            <p className="text-[22px] text-gray-600">customer@gmail.com</p>
            <p className="text-[22px] text-gray-600">client@automx.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails
