import Image from 'next/image'
import React from 'react'

const Gauze = () => {
  return (
    <div>
      <Image src="/assets/vectors/gauze.png" alt="gauze" width={1440} height={549} className='absolute -z-10'/>
    </div>
  );
}

export default Gauze