import React from "react";
import Image from "next/image";

export default function AfterImages() {
  return (
    <>
      <Image
        src="/images/contentImages/afterManMob.webp"
        alt="man"
        width={750}
        height={933}
        className="tabxl:hidden absolute -z-10 top-[61px] left-[calc(50%-187.5px)] max-w-[375px] mx-auto"
      />
      <Image
        src="/images/contentImages/afterManDesk.webp"
        alt="man"
        width={1422}
        height={1439}
        className="hidden tabxl:block absolute -z-10 left-[calc(50%-360px)] deskxl:left-[calc(50%-430px)] tabxl:w-[710px] deskxl:w-[860px] h-auto"
      />
    </>
  );
}
