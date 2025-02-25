import React from "react";
import Image from "next/image";

export default function CtaWebinarImages() {
  return (
    <>
      <Image
        src="/images/contentImages/ctaWebinarMan.webp"
        alt="man"
        width={640}
        height={640}
        className="absolute -z-20 top-9 sm:top-0 tabxl:-top-[162px] -right-[65px] tabxl:-right-[178px] laptop:-right-[calc(-50%+550px+205px)] w-[659px] tabxl:w-[821px] h-[659px] tabxl:h-[821px] 
    object-cover overflow-visible"
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
        className="absolute -z-10 top-[314px] tabxl:top-[246px] right-[-192px] w-[815px] 
        h-[942px] rotate-[103deg] rounded-full bg-black blur-[69px] tabxl:blur-[150px]"
      ></div>
    </>
  );
}
