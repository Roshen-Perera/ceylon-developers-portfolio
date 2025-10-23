import React from "react";

const AchievementsPortfolio = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-7xl font-bold mt-20">Skills</h1>
      <div>
        <div className="flex flex-row gap-3 justify-center items-center">
          <div className="w-[55px] h-[55px] rounded-4xl bg-[#00000052] flex items-center justify-center p-4 mt-10 mb-10">
            <svg
              width="22"
              height="34"
              viewBox="0 0 22 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1101_3360)">
                <path
                  d="M21.9984 10.1107L10.9977 5.05537L0 10.1107V5.05537L10.9992 0L22 5.05537V10.1107H21.9984Z"
                  fill="#A435F0"
                />
                <path
                  d="M0 14.3555H5.76187V25.4995C5.76187 28.3786 8.46274 29.7821 10.9992 29.7821C13.5576 29.7821 16.2381 28.3413 16.2381 25.4608V14.3555H22V25.765C22 28.4173 20.9525 30.4639 18.8576 31.8673C16.7611 33.2695 14.1432 33.9525 10.9507 33.9525C7.7613 33.9525 5.14184 33.2707 3.09544 31.8673C1.04747 30.4651 0 28.4946 0 25.8784V14.3555Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1101_3360">
                  <rect width="22" height="34" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h3 className="text-[30px]">Udemy</h3>
        </div>
      </div>
    </div>
  );
};

export default AchievementsPortfolio;
