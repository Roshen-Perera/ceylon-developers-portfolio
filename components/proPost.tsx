import React from 'react'
import { ButtonText, H2, P } from './typography';

const ProPost = () => {
  return (
    <>
      <div className="flex flex-col gap-7 p-7 rounded-[20px] items-center w-[345px] sm:w-[499px]  md:w-[573px]  lg:w-[779px]  xl:w-[913px] 2xl:w-[984px] text-center bg-(--post-bg) bg-(image:--post-bg) blur-(--post-blur)">
        <H2>
          Ready to <span className="font-kaushan"> Manage </span> your
          <br />
          team like a pro?
        </H2>
        <P>
          Pushing the boundaries of what&apos;s possible in the digital realm.
          Join us on this journey into the future of technology.
        </P>
        <ButtonText className="text-[22px] px-3 py-2 text-lg bg-[#17CDCA] rounded-2xl">
          Get Started
        </ButtonText>
      </div>
    </>
  );
}

export default ProPost