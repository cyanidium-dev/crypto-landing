import BulletedListItem from "@/components/shared/bulletedListItem/BulletedListItem";
import React from "react";
import { motion } from "framer-motion";
import { listVariants } from "@/helpers/animation";

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
    <motion.ul  initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={listVariants}
      transition={{ delay: 1.5 }} className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center tabxl:justify-between gap-5 tabxl:gap-y-6 tabxl:max-w-[1100px] tabxl:mx-auto">
      {bonusesList.map((bonus, idx) => (
        <BulletedListItem key={idx} item={bonus} onlyOpacity/>
      ))}
    </motion.ul>
  );
}
