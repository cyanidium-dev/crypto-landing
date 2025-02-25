import React from "react";
import Image from "next/image";

export default function ReviewsImages() {
  return (
    <>
      <Image
        src="/images/contentImages/reviewsMan.webp"
        alt="man"
        width={1024}
        height={768}
        className="absolute -z-20 -top-4 tabxl:top-[137px] left-[calc(50%-322px+12px)] tabxl:-left-[90px] w-[644px] max-w-[644px] h-[483px] object-cover origin-center overflow-visible"
      />
      <div className="absolute -z-30 top-[162px] tabxl:top-[315px] right-[calc(50%-478px)] tabxl:right-auto tabxl:left-[38px] w-[649px] h-[747px] rounded-full bg-purple blur-[150px]"></div>
      <div className="absolute -z-10 top-[188px] tabxl:top-[315px] right-[calc(50%-436px)] tabxl:right-auto tabxl:left-[-215px] w-[748px] tab:w-[1048px] tabxl:w-[1307px] h-[696px] tabxl:h-[1216px] rounded-full bg-black blur-[85px] tabxl:blur-[150px]"></div>
    </>
  );
}
