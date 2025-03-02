"use client";
import React from "react";
import BenefitItem from "./BenefitItem";
import { motion } from "framer-motion";

const fadeInAnimation = (idx: number) => ({
  hidden: { opacity: 0, y: idx % 2 === 0 ? -60 : 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.3, delay: idx * 0.2, ease: "easeOut" },
  },
});

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
    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center laptop:justify-between sm:flex-wrap laptop:flex-nowrap 
    max-w-[989px] laptop:max-w-[1100px] mx-auto"
    >
      {benefitsList.map((benefit, idx) => (
        <motion.li
          key={idx}
          variants={fadeInAnimation(idx)}
          className="flex justify-center items-center w-full max-w-[331px] laptop:max-w-[260px] h-[203px] p-[1px] rounded-[24px] bg-caviarGradient"
        >
          <BenefitItem benefit={benefit} />
        </motion.li>
      ))}
    </motion.ul>
  );
}
