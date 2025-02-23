import React from "react";
import AdvantagesList from "./AdvantagesList";
import AfterImages from "./AfterImages";

export default function After() {
  return (
    <section
      className="relative tabxl:flex tabxl:flex-col-reverse container max-w-[1920px] scroll-mt-[82px] tabxl:scroll-mt-[124px] pt-[443px] tabxl:pt-[197px] pb-14 tabxl:pb-[82px]
    mb-[109px] tabxl:mb-[83px]"
    >
      <AfterImages />
      <p className="w-fit px-1 tabxl:px-[10px] mb-3 tabxl:mb-0 mx-auto font-michelin uppercase text-center text-64bold tabxl:text-128bold text-transparent bg-clip-text bg-caviarGradient">
        После
      </p>
      <div className="tabxl:flex tabxl:justify-between tabxl:items-center tabxl:mb-[60px]">
        <h2 className="max-w-[682px] tabxl:w-[370px] desk:w-[520px] mx-auto tabxl:mx-0 mb-12 tabxl:mb-0 font-michelin uppercase text-center tabxl:text-left text-24bold tabxl:text-40bold">
          Трейдинг – это не просто заработок, а путь к свободе!
        </h2>
        <AdvantagesList />
      </div>
    </section>
  );
}
