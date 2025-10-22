
import NavBarPortfolio from '@/components/navBarPortfolio';
import React from 'react'

const Page = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <NavBarPortfolio />
      </div>
      <div className="mt-20 max-w-[1187px]">
        <p className="text-[22px]">️👋 Hello I am,</p>
      </div>
    </>
  );
}

export default Page