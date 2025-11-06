import React from 'react'
import ServiceCarousel from './serviceCarousel';
import { H2, P } from './typography';

const Services = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-12">
        <H2 className="text-7xl font-medium  md:max-w-full max-w-sm">
          <span className="font-kaushan">Services</span> we offer{" "}
        </H2>
        <div className="mt-8 max-w-2xl flex items-center mx-auto px-4">
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
}

export default Services