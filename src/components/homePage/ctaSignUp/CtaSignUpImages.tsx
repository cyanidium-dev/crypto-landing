import React from "react";
import Image from "next/image";

export default function CtaSignUpImages() {
  return (
    <>
      <Image
        src="/images/contentImages/startEarning.svg"
        alt="start earning text"
        width="316"
        height="175"
        className="absolute -z-10 top-[290px] tabxl:top-[399px] laptop:top-[513px] deskxl:top-[654px] left-[calc(50%-164px)] tabxl:left-auto tabxl:right-[40px] laptop:right-[96px] deskxl:right-auto deskxl:left-[calc(50%+260px)] w-[316px] tabxl:w-[450px] deskxl:w-[560px] h-auto"
      />

      <div
        className="absolute -z-50 right-[calc(50%-306px)] tabxl:-right-[83px] top-[136px] tabxl:top-[289px] w-[464px] tabxl:w-[532px] laptop:w-[649px] 
       h-[534px] tabxl:h-[612px] laptop:h-[747px] rounded-full bg-purple blur-[107px] tabxl:blur-[150px]"
      ></div>
      <div className="absolute -z-20 right-[calc(50%-520px)] tabxl:-right-[383px] -bottom-[67px] tabxl:-bottom-[504px] w-[804px] tabxl:w-[1023px] laptop::w-[1125px] h-[721px] tabxl:h-[917px] laptop:h-[1009px] rounded-full bg-black blur-[107px] tabxl:blur-[150px]"></div>
    </>
  );
}
