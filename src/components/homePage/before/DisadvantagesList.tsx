import BulletedListItem from "@/components/shared/bulletedListItem/BulletedListItem";
import React from "react";
import { motion } from "framer-motion";
import { listVariants } from "@/helpers/animation";

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
      title: "Работа без перспектив",
    },
  ];

  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={listVariants}
      transition={{ delay: 1.5 }}
      className="flex flex-col items-center gap-5 tabxl:gap-y-6 sm:justify-center"
    >
      {disadvantagesList.map((disadvantage, idx) => (
        <BulletedListItem key={idx} item={disadvantage} />
      ))}
    </motion.ul>
  );
}
