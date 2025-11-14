import React from 'react'
import { ButtonText, H2, P } from './typography';

const ProPost = () => {
  return (
    <>
      <div className="flex flex-col gap-7 p-7 rounded-[20px] items-center w-[345px] h-[333px] sm:w-[499px] sm:h-[325px] md:w-[573px] md:h-[353px] lg:w-[779px] lg:h-[355px] xl:w-[913px] xl:h-96 2xl:w-[984px] 2xl:h-[410px] text-center bg-(--post-bg) bg-(image:--post-bg) blur-(--post-blur)">
        <H2>
          Ready to <span className="font-kaushan"> Manage </span> your
          <br />
          team like a pro?
        </H2>
        <P>
          Pushing the boundaries of what&apos;s possible in the digital realm.
          Join us on this journey into the future of technology.
        </P>
        <ButtonText className="text-[22px] w-[172px] p-3 text-lg bg-[#17CDCA] rounded-2xl">
          Get Started
        </ButtonText>
      </div>
    </>
  );
}

export default ProPost