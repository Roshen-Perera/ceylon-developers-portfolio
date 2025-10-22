import NavBarPortfolio from "@/components/navBarPortfolio";
import { Download } from "lucide-react";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <NavBarPortfolio />
      </div>
      <div className="flex flex-col mt-20 ml-30 max-w-[1103px] justify-center">
        <div className="flex flex-col gap-4">
          <p className="text-[22px]">️👋 Hello I am,</p>
          <h2 className="text-[50px]">UI/UX designer </h2>
          <p className="text-[22px]">
            For the past decade, I’ve been on a mission to revolutionize design
            and tech with bold creativity and cutting-edge solutions.{" "}
          </p>
          <div>
            <button className="flex flex-row gap-3 items-center bg-[#17CDCA] text-black text-[22px] rounded-md hover:bg-cyan-500 transition-colors px-6 py-2 h-fit">
              Resume Download
              <Download />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-20">
          <div>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.135 17.4452H5.1C5.22 10.4402 6.6 9.2852 10.905 6.7352C11.4 6.4352 11.565 5.8052 11.265 5.2952C10.98 4.8002 10.335 4.6352 9.84 4.9352C4.77 7.9352 3 9.7652 3 18.4802V26.5652C3 29.1302 5.085 31.2002 7.635 31.2002H12.135C14.775 31.2002 16.77 29.2052 16.77 26.5652V22.0652C16.77 19.4402 14.775 17.4452 12.135 17.4452Z"
                fill="black"
              />
              <path
                d="M28.3651 17.4452H21.3301C21.4501 10.4402 22.8301 9.2852 27.1351 6.7352C27.6301 6.4352 27.7951 5.8052 27.4951 5.2952C27.1951 4.8002 26.5651 4.6352 26.0551 4.9352C20.9851 7.9352 19.2151 9.7652 19.2151 18.4952V26.5802C19.2151 29.1452 21.3001 31.2152 23.8501 31.2152H28.3501C30.9901 31.2152 32.9851 29.2202 32.9851 26.5802V22.0802C33.0001 19.4402 31.0051 17.4452 28.3651 17.4452Z"
                fill="black"
              />
            </svg>

            <p className="text-[22px] mt-4">
              Jenny’s Exceptional UI design ensure our website’s success.Highly
              Recommended
            </p>
          </div>
          <div className="custom-eclipse">
            <Image
              src="/assets/images/girl.png"
              alt="Jenny"
              width={487}
              height={636}
              className="relative bottom-17"
            />
          </div>

          <div>
            <div className="relative z-10 text-right w-full pr-8">
              {/* Rating Stars */}
              <div className="flex gap-1 justify-end mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-yellow-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Experience Badge */}
              <div className="text-right">
                <div className="text-[50px] font-bold ">5 Years</div>
                <div className="text-[22px]">Experience</div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-[22px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
          justo nec ultrices dui sapien eget mi proin sed. Eu lobortis elementum
          nibh tellus molestie nunc non blandit massa. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Viverra justo nec ultrices dui sapien
          eget mi proin sed. Eu lobortis elementum nibh tellus molestie nunc non
          blandit massa.
        </p>
        
      </div>
    </>
  );
};

export default Page;
