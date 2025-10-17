import Image from 'next/image';
import React from 'react'

const RelatedSaasWorks = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-7xl font-medium">Related Works</h1>
      <div className="flex flex-row justify-around">
        <Image src="/assets/images/saas1.png" alt="" width={483} height={539} />
        <Image
          src="/assets/images/saas2.png"
          alt=""
          width={483}
          height={539}
          className="pt-30"
        />
      </div>
    </div>
  );
}

export default RelatedSaasWorks
