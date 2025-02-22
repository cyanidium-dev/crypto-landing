import React from "react";
import BenefitsList from "./BenefitsList";

export default function TradingBenefits() {
  return (
    <section
      id="benefits"
      className="container max-w-[1920px] scroll-mt-[82px] tabxl:scroll-mt-[124px] pt-[65px] laptop:pt-[145px] pb-[63px] laptop:pb-[131px] 
      mb-[73px] laptop:mb-[188px]"
    >
      <h2 className="mb-4 tabxl:mb-5 font-michelin uppercase italic text-20bold tabxl:text-40bold text-center">
        Плюсы трейдинга
      </h2>
      <p className="w-fit pr-2 mx-auto mb-[50px] tabxl:mb-[68px] font-michelin uppercase italic text-24bold tabxl:text-32bold text-transparent bg-clip-text bg-caviarGradient text-center">
        Почему это выгодно?
      </p>
      <BenefitsList />
    </section>
  );
}
