import React from "react";
import Image from "next/image";

export default function CtaSignUpImages() {
  return (
    <>
      <div className="relative max-w-[375px] tabxl:max-w-[420px] laptop:max-w-[514px] desk:max-w-[540px] deskxl:max-w-[700px] mx-auto tabxl:mx-0">
        <Image
          src="/images/contentImages/ctaSignUpMan.webp"
          alt="man in the sunglasses"
          width={1028}
          height={1232}
          className="relative -z-30"
        />
        <Image
          src="/images/contentImages/startEarning.svg"
          alt="start earning text"
          width="316"
          height="175"
          className="absolute -z-10 -bottom-[30px] tabxl:-bottom-3 left-4 tabxl:left-10 w-[90%]"
        />
      </div>
      <div className="absolute -z-50 -right-[83px] -bottom-[144px] tabxl:w-[649px] tabxl:h-[747px] rounded-full bg-purple blur-[150px]"></div>
      <div className="absolute -z-20 -right-[383px] -bottom-[504px] tabxl:w-[1125px] tabxl:h-[1009px] rounded-full bg-black blur-[150px]"></div>
    </>
  );
}
