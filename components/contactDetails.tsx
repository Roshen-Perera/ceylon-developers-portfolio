import { Mail } from 'lucide-react';
import React from 'react'

const ContactDetails = () => {
  return (
    <div className="flex flex-row items-center justify-center mt-12">
      <div className="flex flex-col items-center justify-center gap-4 mx-8">
        <div>
          <div className="p-5 bg-[#17CDCA]">
            <Mail size={48} color="#00FFFF" />
          </div>
          <h3 className="text-[26px] font-medium">Email</h3>
          <p className="text-[22px]">customer@gmail.com</p>
          <p className="text-[22px]">client@automx.com</p>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails
