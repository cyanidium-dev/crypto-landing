"use client";

import { motion } from "framer-motion";
import DisadvantagesList from "./DisadvantagesList";
import BeforeImages from "./BeforeImages";
import { fadeInAnimation } from "@/helpers/animation";

export default function Before() {
  return (
    <section
      id="before"
      className="relative scroll-mt-[82px] tabxl:scroll-mt-[124px] pt-[100px] tabxl:pt-[91px] pb-14 tabxl:pb-[125px] 
    mb-[78px] tabxl:mb-[127px] overflow-x-clip"
    >
      <BeforeImages />
      <div className="container max-w-[1920px]">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInAnimation({ y: 80, duration: 1 })}
          className="max-w-[342px] sm:max-w-[597px] tabxl:max-w-[597px] tabxl:ml-[19%] mb-[416px] tabxl:mb-[14px] mx-auto tabxl:mr-0 
      font-michelin uppercase text-center tabxl:text-left text-24bold tabxl:text-40bold"
        >
          Моё «До» и «После» в трейдинге
        </motion.h2>
        <div className="tabxl:flex tabxl:gap-x-6 laptop:gap-x-[57px]">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInAnimation({
              scale: 0.7,
              delay: 1.5,
              duration: 0.8,
            })}
            className="tabxl:max-w-[263px] tabxl:mt-[22px] mb-12 tabxl:mb-0 tabxl:ml-auto text-14light tabxl:text-20light text-center tabxl:text-left"
          >
            Вот как может выглядеть ваш путь от новичка до успешного трейдера.
          </motion.p>
          <DisadvantagesList />
        </div>
      </div>
    </section>
  );
}
