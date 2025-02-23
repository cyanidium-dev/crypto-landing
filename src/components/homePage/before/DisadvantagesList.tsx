import BulletedListItem from "@/components/shared/bulletedListItem/BulletedListItem";
import React from "react";

export default function DisadvantagesList() {
  const disadvantagesList = [
    {
      title: "Финансовая нестабильность и зависимость от зарплаты",
    },
    {
      title: "Незнание, как работают рынки и инвестиции",
    },
    {
      title: "Страх потерь, хаотичные сделки без стратегии",
    },
    {
      title: "Работа без перспектив и ограниченная свобода",
    },
  ];

  return (
    <ul className="flex flex-col sm:flex-row sm:flex-wrap tabxl:flex-col items-center gap-5 tabxl:gap-y-6 sm:justify-center">
      {disadvantagesList.map((disadvantage, idx) => (
        <BulletedListItem key={idx} item={disadvantage} />
      ))}
    </ul>
  );
}
