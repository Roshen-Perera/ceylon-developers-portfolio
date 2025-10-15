import React from "react";

const Roles = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h1 className="text-7xl font-medium">
        Find the <span className="font-kaushan"> Best Role </span> for You
      </h1>
      <div className="grid grid-cols-2 ">
        <div>
          <h3 className="text-[30px] font-medium">Software Developer</h3>
          <p>
            We seek a skilled Software Developer to join our tech team. You will
            be responsible for developing and maintaining software applications.
            Strong programming skills and experience with various coding
            languages are required.
          </p>
          <div className="flex flex-row justify-between">
            <div>
                <p>Remote</p>
                <p>Full-Time</p>
            </div>
            <div>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roles;
