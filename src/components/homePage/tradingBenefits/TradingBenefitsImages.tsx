import Image from "next/image";
import React from "react";

export default function TradingBenefitsImages() {
  return (
    <>
      <Image
        src="/images/backgrounds/tradingBenefitsSection/dollarMob.webp"
        alt="dollars"
        width="1024"
        height="1027"
        className="block tabxl:hidden absolute -z-50 top-[10px] left-0 h-[1027px] tabxs:h-[625px] object-cover object-left"
      />
      <Image
        src="/images/backgrounds/tradingBenefitsSection/dollarDesk.webp"
        alt="dollars"
        width="1920"
        height="676"
        className="hidden tabxl:block absolute -z-50 top-4 left-0 w-full h-[676px] object-cover object-left"
      />
      <div className="absolute -z-20 top-[-73px] left-0 w-full h-[759px] tabxl:h-[829px] bg-afterSectionTopGradient"></div>
      <div className="absolute -z-30 left-0 bottom-0 tabxl:bottom-[-167px] w-full h-[266px] tabxl:h-[312px] bg-bottomGradient"></div>
      <div className="absolute z-0 left-[15px] tabxl:left-[460px] top-[220px] w-[226px] h-[188px] rounded-full bg-caviarGradient blur-[165px] supports-[backdrop-filter]:blur-[165px] will-change-transform"></div>
    </>
  );
}
