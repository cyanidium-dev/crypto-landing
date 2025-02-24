import BulletedListItem from "@/components/shared/bulletedListItem/BulletedListItem";
import React from "react";

export default function BonusesList() {
  const bonusesList = [
    {
      title: "Бесплатные сливы курсов от топовых трейдеров",
    },
    {
      title: "Разборы реальных кейсов учеников",
    },
    {
      title: "Поддержка начинающих трейдеров",
    },
    {
      title: "Личное обучение от топового трейдера",
    },
  ];

  return (
    <ul className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center tabxl:justify-between gap-5 tabxl:gap-y-6 tabxl:max-w-[1100px] tabxl:mx-auto">
      {bonusesList.map((bonus, idx) => (
        <BulletedListItem key={idx} item={bonus} />
      ))}
    </ul>
  );
}
