import BulletedListItem from "@/components/shared/bulletedListItem/BulletedListItem";
import React from "react";

export default function AdvantagesList() {
  const advantagesList = [
    {
      title: "Дополнительный или основной доход",
    },
    {
      title: "Чёткие стратегии и уверенность в сделках",
    },
    {
      title: "Финансовая независимость и контроль над своим временем",
    },
    {
      title: "Возможность работать из любой точки мира",
    },
  ];

  return (
    <ul className="flex flex-col sm:flex-row sm:flex-wrap tabxl:flex-col items-center gap-5 tabxl:gap-y-6 sm:justify-center">
      {advantagesList.map((advantage, idx) => (
        <BulletedListItem key={idx} item={advantage} variant="caviar" />
      ))}
    </ul>
  );
}
