import React from "react";
import BenefitItem from "./BenefitItem";

export default function BenefitsList() {
  const benefitsList = [
    {
      title: "Финансовая независимость",
      description: "Зарабатывайте без ограничений и начальников",
    },
    {
      title: "Гибкий\nграфик",
      description: "Торгуйте в удобное время из любой точки мира",
    },
    {
      title: "Минимальный старт",
      description: "Начните с небольших вложений или демо-счёта",
    },
    {
      title: "Безграничный рост",
      description: "Совершенствуйтесь и увеличивайте прибыль",
    },
  ];

  return (
    <ul
      className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center laptop:justify-between sm:flex-wrap laptop:flex-nowrap 
    max-w-[989px] laptop:max-w-[1100px] mx-auto"
    >
      {benefitsList.map((benefit, idx) => (
        <BenefitItem key={idx} benefit={benefit} />
      ))}
    </ul>
  );
}
