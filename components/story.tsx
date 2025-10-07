import React from 'react'
import Image from 'next/image';

const Story = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <div className="flex flex-row items-center gap-12">
        <div className="flex flex-col gap-6 flex-1 max-w-lg">
          <p className="text-7xl font-medium">
            Our <span className="font-kaushan">Story</span>
          </p>
          <p className="text-[22px] text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
            justo nec ultrices dui sapien eget mi proin sed. Eu lobortis
            elementum nibh tellus molestie nunc non blandit massa. Nisl nunc mi
            ipsum faucibus vitae aliquet nec ullamcorper.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-3 items-center">
              <Image
                src={"/assets/icons/tick.png"}
                alt={"check mark"}
                width={24}
                height={24}
                className="flex-shrink-0"
              />
              <p className="text-[22px]">Advanced AI Foundation</p>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <Image
                src={"/assets/icons/tick.png"}
                alt={"check mark"}
                width={24}
                height={24}
                className="flex-shrink-0"
              />
              <p className="text-[22px]">Purpose-Driven</p>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <Image
                src={"/assets/icons/tick.png"}
                alt={"check mark"}
                width={24}
                height={24}
                className="flex-shrink-0"
              />
              <p className="text-[22px]">Continuous Evolution</p>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0">
          <Image
            src={"/assets/images/storyContainer.png"}
            alt={"today's activity dashboard"}
            width={686}
            height={487}
            style={{ opacity: 1 }}
          />
        </div>
      </div>
    </div>
  );
}

export default Story