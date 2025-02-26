import React from "react";
import Image from "next/image";

export default function HeroImages() {
  return (
    <>
      <Image
        src="/images/contentImages/heroMan.webp"
        alt="man"
        width={1332}
        height={1658}
        className="absolute -z-[80] -top-[124px] w-[481px] h-[599px] left-[calc(50%-240px+15px)] sm:right-[calc(50%-283px-48px)]
          tabxl:-right-[147px] laptop:-right-[77px] desk:right-0 object-cover object-left overflow-visible"
      />
      <Image
        src="/images/contentImages/ctaWebinarMan.webp"
        alt="man"
        width={1342}
        height={1671}
        className="absolute -z-30 -top-[119px] w-[473px] h-[589px] left-[calc(50%-237px+17px)] object-cover object-left overflow-visible"
      />
      <div className="absolute -z-40 top-[-436px] left-[calc(50%-369px-225px)] w-[738px] h-[681px] rounded-full bg-black blur-[98px]"></div>
      <div className="absolute -z-50 top-[203px] left-[calc(50%-369px+132px)] w-[738px] h-[681px] rounded-full bg-black blur-[98px]"></div>
      <div className="absolute -z-20 top-[252px] left-[calc(50%-320px)] w-[640px] h-[350px] rounded-full bg-black blur-[89px]"></div>
      <div className="absolute -z-[70] top-[147px] left-[calc(50%-213px+77px)] w-[426px] h-[490px] rounded-full bg-purple blur-[128px]"></div>
    </>
  );
}
