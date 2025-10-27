import React from 'react'

const SupportAndScalability = () => {
  return (
    <div
      className="flex items-center justify-center gap-8 p-12 rounded-[24px] max-w-lg "
      style={{ boxShadow: "0px 0px 15px 5px #17CDCA78 inset" }}
    >
      <div className="flex-1">
        <div className="text-[30px] mb-2">24/7</div>
        <h3 className="text-[26px] font-bold  mb-2">Support</h3>
        <p className="text-[22px]">
          Always available assistance for customer inquiries anytime.
        </p>
      </div>
      <svg
        width="2"
        height="240"
        viewBox="0 0 2 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="1"
          height="239"
          stroke="#352A43"
          strokeDasharray="3 2"
        />
      </svg>

      <div className="flex-1">
        <div className="text-[30px] mb-2">100%</div>
        <h3 className="text-[26px] font-bold mb-2">Scalability</h3>
        <p className="text-[22px]">
          Effortlessly grows with increasing demands and needs.
        </p>
      </div>
    </div>
  );
}

export default SupportAndScalability
