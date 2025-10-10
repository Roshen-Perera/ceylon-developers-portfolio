import React from 'react'

const SupportAndScalability = () => {
  return (
    <div
      className="flex items-start gap-8 p-12 rounded-[24px] bg-white max-w-lg"
      style={{ boxShadow: "0px 0px 15px 5px #17CDCA78 inset" }}
    >
      <div className="flex-1">
        <div className="text-[30px] mb-2">24/7</div>
        <h3 className="text-[26px] font-bold  mb-2">Support</h3>
        <p className="text-[22px]">
          Always available assistance for customer inquiries anytime.
        </p>
      </div>
      <div className="w-px h-24 bg-gray-300"></div>
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
