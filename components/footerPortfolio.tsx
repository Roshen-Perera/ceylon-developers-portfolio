import { Mail } from 'lucide-react';
import React from 'react'

const FooterPortfolio = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div>
          <div className='flex flex-row gap-2'>
            <Mail />
            <p>example@gmail.com</p>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default FooterPortfolio