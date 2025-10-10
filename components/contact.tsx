import React from 'react'
import Image from 'next/image';
import ContactUsForm from './contactUseForm';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-5">
          <h1 className="text-7xl font-medium">
            Get in
            <span className="font-kaushan">touch</span>
          </h1>
          <p className="text-[22px]">
            We’re here to support you! Feel free to reach out for
            <br />
            assistance, feedback, or any questions.
          </p>
          <h2 className="text-[30px]">Let’s Talk About:</h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-3 items-center">
              <div className="rounded-4xl">
                <Image
                  src={"/assets/icons/right.png"}
                  alt={"check mark"}
                  width={24}
                  height={24}
                  className="flex-shrink-0 rounded-2xl"
                />
              </div>

              <p className="text-[22px]">Customer Experience</p>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <Image
                src={"/assets/icons/right.png"}
                alt={"check mark"}
                width={24}
                height={24}
                className="flex-shrink-0 rounded-2xl"
              />
              <p className="text-[22px]">Quality and Trust</p>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <Image
                src={"/assets/icons/right.png"}
                alt={"check mark"}
                width={24}
                height={24}
                className="flex-shrink-0 rounded-2xl"
              />
              <p className="text-[22px]">Dependable Service</p>
            </div>
          </div>
        </div>
        <ContactUsForm />
      </div>
    </div>
  );
}

export default Contact