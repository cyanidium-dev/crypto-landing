import React from "react";
import BenefitsList from "./BenefitsList";
import TradingBenefitsImages from "./TradingBenefitsImages";

export default function TradingBenefits() {
  return (
    <section
      id="benefits"
      className="relative scroll-mt-[82px] tabxl:scroll-mt-[124px] pt-[65px] laptop:pt-[145px] pb-[63px] laptop:pb-[131px] 
      mb-[73px] laptop:mb-[188px] overflow-x-clip"
    >
      <TradingBenefitsImages />
      <div className="container max-w-[1920px]">
        <h2 className="mb-4 tabxl:mb-5 font-michelin uppercase text-20bold tabxl:text-40bold text-center">
          Плюсы трейдинга
        </h2>
        <p
          className="w-fit pr-2 mx-auto mb-[50px] tabxl:mb-[68px] font-michelin uppercase text-24bold tabxl:text-32bold text-transparent 
      bg-clip-text bg-benefitsTextGradient text-center"
        >
          Подпишись и начни зарабатывать
        </p>
        <BenefitsList />
      </div>
    </section>
  );
}
