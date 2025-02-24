import React from "react";
import BonusesList from "./BonusesList";
import OpenTelegramChat from "./OpenTelegramChat";
import Image from "next/image";

export default function CtaWebinar() {
  return (
    <section
      className="relative container max-w-[1920px] pt-[42px] tabxl:pt-[96px] pb-[61px] tabxl:pb-[92px] mb-[104px] tabxl:mb-[74px] 
    overflow-x-hidden"
    >
      <h2
        className="max-w-[331px] sm:max-w-[472px] tabxl:max-w-[744px] mb-3 font-michelin uppercase text-24bold tabxl:text-40bold text-transparent 
        bg-clip-text 
      bg-caviarGradient"
      >
        залетай в мой канал и посети бесплатный вебинар по основам трейдинга
      </h2>
      <p className="w-[247px] tabxl:w-[338px] mb-[205px] tabxl:mb-[42px] text-14light tabxl:text-20light">
        Заработай свои первые 500$ с трейдинга уже на этой неделе!
      </p>
      <Image
        src="/images/contentImages/ctaWebinarMan.webp"
        alt="man"
        width={640}
        height={640}
        className="absolute -z-10 top-9 sm:top-0 tabxl:-top-[162px] -right-[65px] tabxl:-right-[178px] laptop:-right-[calc(-50%+550px+205px)] w-[659px] tabxl:w-[821px] h-[659px] tabxl:h-[821px] 
        object-cover origin-center overflow-visible"
      />
      <BonusesList />
      <OpenTelegramChat />
    </section>
  );
}
