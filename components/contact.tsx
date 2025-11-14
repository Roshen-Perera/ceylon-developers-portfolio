import React from 'react'
import Image from 'next/image';
import ContactUsForm from './contactUseForm';
import { H2, P } from './typography';
import { ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-5">
          <H2>
            Get in
            <span className="font-kaushan">touch</span>
          </H2>
          <P>
            We’re here to support you! Feel free to reach out for
            <br />
            assistance, feedback, or any questions.
          </P>
          <h2 className="text-[30px]">Let’s Talk About:</h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-3 items-center">
              <div className="flex p-1 justify-center items-center rounded-[38px] bg-[#17CDCA]">
                <ArrowRight className="size-3 xl:size-4" />
              </div>
              <P>Customer Experience</P>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <div className="flex p-1 justify-center items-center rounded-[38px] bg-[#17CDCA]">
                <ArrowRight className="size-3 xl:size-4" />
              </div>
              <P>Quality and Trust</P>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <div className="flex p-1 justify-center items-center rounded-[38px] bg-[#17CDCA]">
                <ArrowRight className="size-3 xl:size-4" />
              </div>
              <P>Dependable Service</P>
            </div>
          </div>
        </div>
        <ContactUsForm />
      </div>
    </div>
  );
}

export default Contact