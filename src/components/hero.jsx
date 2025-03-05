import React from "react";
import Header from "./common/Header";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className='bg-no-repeat bg-cover bg-center max-sm:bg- h-[850px] max-md:h-[700px] relative bg-[url("/assets/images/webp/hero-bg-buildings.webp")]'>
        <div className="max-w-[1332px] mx-auto px-4">
          <Header />
          <Image
            src="/assets/images/webp/hero-heading.webp"
            alt="heading"
            width={777}
            height={283}
            className="mt-[63px] w-full max-w-[777px] max-lg:max-w-[600px] max-sm:max-w-[373px] mx-auto"
          />
        </div>
        <div className="">
          <Image
            src="/assets/images/webp/hero-pizza-boy-bike.webp"
            alt="pizza-delivery-boy"
            width={357}
            height={357}
            className="mx-auto w-full max-w-[357px] absolute left-1/2 -translate-x-1/2 bottom-3 z-[3] max-sm:max-w-[252px] max-md:pt-[64px]"
          />
          <Image
            src="/assets/images/webp/hero-pizza-slice.webp"
            alt="pizza-slice"
            width={1040}
            height={625}
            className="w-full absolute bottom-0"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
