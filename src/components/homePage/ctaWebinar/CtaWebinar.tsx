import React from "react";
import BonusesList from "./BonusesList";
import OpenTelegramChat from "./OpenTelegramChat";
import CtaWebinarImages from "./CtaWebinarImages";

export default function CtaWebinar() {
  return (
    <section
      className="relative pt-[42px] tabxl:pt-[96px] pb-[61px] tabxl:pb-[92px] mb-[104px] tabxl:mb-[74px] 
    overflow-x-clip"
    >
      <CtaWebinarImages />
      <div className="container max-w-[1920px]">
        <h2
          className="max-w-[331px] sm:max-w-[472px] tabxl:max-w-[744px] mb-3 font-michelin uppercase text-24bold tabxl:text-40bold text-transparent 
        bg-clip-text bg-caviarGradient"
        >
          залетай в мой канал и посети бесплатный вебинар по основам трейдинга
        </h2>
        <p className="w-[207px] tabxl:w-[338px] mb-[205px] tabxl:mb-[42px] text-14light tabxl:text-20light">
          Заработай свои первые 500$ с трейдинга уже на этой неделе!
        </p>
        <BonusesList />
        <OpenTelegramChat />
      </div>
    </section>
  );
}
