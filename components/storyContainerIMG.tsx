import React from 'react'
import Image from 'next/image';

const StoryContainerIMG = () => {
  return (
    <div>
      <Image
        src={"/assets/images/storyContainer.png"}
        alt={"today's activity dashboard"}
        width={686}
        height={487}
        style={{ opacity: 1 }}
      />
    </div>
  );
}

export default StoryContainerIMG