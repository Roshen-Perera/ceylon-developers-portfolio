import React from 'react'
import ServiceCarousel from './serviceCarousel';
import { H2 } from './typography';

const Services = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-12">
        <H2 className="text-7xl font-medium">
          <span className="font-kaushan">Services</span> we offer{" "}
        </H2>
        <div className="mt-8 max-w-2xl flex items-center mx-auto px-4">
          <p className="text-center">
            Pushing the boundaries of what&apos;s possible in the digital realm.
            Join us on this journey into the future of technology.
          </p>
        </div>
        <div className="mt-8">
          <ServiceCarousel />
        </div>
      </div>
    </>
  );
}

export default Services