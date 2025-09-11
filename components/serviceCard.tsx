import Image from "next/image";
import React from "react";

const ServiceCard = () => {

  return (
    <>
      <div className="justify border-1 rounded-lg p-3">
        <Image src={"/assets/icons/web.gif"} alt={""} width={40} height={40} />
        <p className="text-xl font-semibold">Web Design & Development</p>
        <p className="text-lg">
          A Website is an extension of yourself and we can help you to express
          it properly. Your website is your number one marketing asset because
          we live in a digital age.
        </p>
      </div>
    </>
  );
};

export default ServiceCard;
