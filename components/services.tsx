import React from "react";
import ServiceCarousel from "./serviceCarousel";
import { H2, P } from "./typography";


const Services = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-12">
        <div className="sm:max-w-full max-w-sm">
          <H2 className="text-7xl font-medium  ">
            <span className="font-kaushan">Services</span> we offer
          </H2>
        </div>
        <div className="lg:mt-8 mt-4 lg:max-w-2xl md:max-w-xl max-w-xs flex items-center">
          <P className="text-center">
            Pushing the boundaries of what&apos;s possible in the digital realm.
            Join us on this journey into the future of technology.
          </P>
        </div>
        <div className="mt-8">
          <ServiceCarousel />
        </div>
      </div>
    </>
  );
};

export default Services;
