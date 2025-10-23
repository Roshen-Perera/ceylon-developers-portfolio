import { Mail, Phone } from "lucide-react";
import React from "react";

const FooterPortfolio = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row gap-10 font-bold text-[22px] text-[#585858]">
          <div className="flex flex-row gap-2 justify-center items-center">
            <Mail />
            <p>example@gmail.com</p>
          </div>
          <div className="flex flex-row gap-2 justify-center items-center">
            <Phone />
            <p>+94 715 372 410</p>
          </div>
        </div>
        <div className="flex flex-row mt-7 gap-20 font-bold text-[22px] text-[#585858]">
          <a href="#">About me</a>
          <a href="#">Projects</a>
          <a href="#">Skills</a>
          <a href="#">Achievements</a>
          <a href="#">Contact me</a>
        </div>
        <div className="flex flex-row gap-3 mt-10">
          <div className="flex w-[40px] h-[40px] bg-black items-center justify-center rounded-[6.67px]">
            <svg
              width="11"
              height="19"
              viewBox="0 0 11 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.86198 10.7168H0.504645C0.131311 10.7168 -0.000244141 10.5835 -0.000244141 10.2102V7.33195C-0.000244141 6.96395 0.141978 6.82173 0.506422 6.82173H2.86198V4.73284C2.86198 3.79062 3.03087 2.88751 3.50909 2.06262C3.98028 1.23975 4.73281 0.614739 5.6282 0.302617C6.21116 0.0951186 6.82634 -0.0072106 7.44509 0.000394811L9.77753 0.00217257C10.1118 0.00217257 10.2611 0.149728 10.2611 0.487506V3.19151C10.2611 3.53284 10.1189 3.66973 9.77753 3.67151C9.13753 3.68039 8.50109 3.67506 7.86464 3.70173C7.22109 3.70173 6.88331 4.01462 6.88331 4.67951C6.86553 5.38528 6.8762 6.09106 6.8762 6.81995H9.62287C10.0104 6.81995 10.1438 6.95328 10.1438 7.3444V10.2066C10.1438 10.5924 10.0193 10.7151 9.6282 10.7151H6.86731V18.4377C6.86731 18.8484 6.73753 18.9799 6.33042 18.9799H3.36153C3.00242 18.9799 2.86376 18.8413 2.86376 18.4822L2.86198 10.7168Z"
                fill="#E7E7E7"
              />
            </svg>
          </div>
          <div className="w-[40px] h-[40px] bg-black items-center justify-center rounded-[6.67px]"></div>
          <div className="w-[40px] h-[40px] bg-black items-center justify-center rounded-[6.67px]"></div>
          <div className="w-[40px] h-[40px] bg-black items-center justify-center rounded-[6.67px]"></div>
        </div>
      </div>
    </>
  );
};

export default FooterPortfolio;
