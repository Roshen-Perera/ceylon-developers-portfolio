import React from "react";
import Image from "next/image";

const TodaysWorkIMG = () => {
  return (
    <div>
      <Image
        src={
          isDark
            ? "/assets/images/todaysActivity2.png"
            : "/assets/images/todaysActivity.png"
        }
        alt={"today's activity dashboard"}
        width={686}
        height={487}
        style={{ opacity: 1 }}
      />
    </div>
  );
};

export default TodaysWorkIMG;
