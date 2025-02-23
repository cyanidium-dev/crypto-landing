import React from "react";
import Image from "next/image";

export default function BeforeImages() {
  return (
    <>
      <Image
        src="/images/contentImages/beforeManMob.webp"
        alt="man"
        width={750}
        height={771}
        className="tabxl:hidden absolute -z-10 top-[137px] sm:top-[72px] left-[calc(50%-187.5px)] max-w-[375px] mx-auto"
      />
      <Image
        src="/images/contentImages/beforeManDesk.webp"
        alt="man"
        width={1416}
        height={1198}
        className="hidden tabxl:block absolute -z-10 desk:left-[70px] bottom-[88px] deskxl:bottom-6 left-0 tabxl:w-[635px] laptop:w-[708px] deskxl:w-[800px] h-auto"
      />
      <Image
        src="/images/contentImages/before.svg"
        alt="man"
        width={194}
        height={138}
        className="absolute top-[419px] sm:top-[354px] tabxl:top-auto tabxl:bottom-[68px] laptop:bottom-[88px] deskxl:bottom-10 left-[calc(50%-97px)] 
          tabxl:left-[266px] laptop:left-[300px] desk:left-[370px] deskxl:left-[416px] w-[194px] tabxl:w-[274px] h-auto"
      />
    </>
  );
}
