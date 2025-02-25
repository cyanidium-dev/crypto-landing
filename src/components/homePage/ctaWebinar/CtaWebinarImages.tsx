import React from "react";
import Image from "next/image";

export default function CtaWebinarImages() {
  return (
    <>
      <Image
        src="/images/contentImages/ctaWebinarMan.webp"
        alt="man"
        width={1342}
        height={1671}
        className="absolute -z-20 top-10 mobxl:top-[-60px] laptop:-top-[162px] -right-4 tabxl:-right-[28px] laptop:-right-[calc(-50%+550px+105px)] 
        h-[659px] laptop:h-[821px] w-auto object-cover overflow-visible"
      />
      <Image
        src="/images/backgrounds/oneRowDollarsDesk.webp"
        alt="dollars"
        width={1920}
        height={154}
        className="absolute -z-30 tabxl:-z-[5] top-[271px] tabxl:top-auto tabxl:bottom-0 left-0 h-[154px] object-cover object-center"
      />
      <div
        className="absolute -z-40 top-[348px] tabxl:top-[336px] right-[-237px] tabxl:right-[-156px] w-[649px] h-[747px] 
       rounded-full bg-purple blur-[150px]"
      ></div>
      <div
        className="absolute -z-10 top-[314px] tabxl:top-[246px] laptop:top-[310px] right-[-192px] laptop:right-[calc(50%-870px)] desk:right-[calc(50%-920px)] w-[815px] laptop:w-[1124px]
        h-[942px] rotate-[103deg] laptop:rotate-0 rounded-full bg-black blur-[69px] tabxl:blur-[90px]"
      ></div>
    </>
  );
}
