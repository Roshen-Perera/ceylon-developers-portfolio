import { Mail, Phone } from 'lucide-react';
import React from 'react'

const FooterPortfolio = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row gap-5 text-[22px] text-[#585858]">
          <div className="flex flex-row gap-2">
            <Mail />
            <p>example@gmail.com</p>
          </div>
          <div className="flex flex-row gap-2">
            <Phone />
            <p>+94 715 372 410</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterPortfolio