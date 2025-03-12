"use client";
import React from "react";
import ReviewsSlider from "./ReviewsSlider";
import ReviewsImages from "./ReviewsImages";
import { motion } from "framer-motion";
import { fadeInAnimation } from "@/helpers/animation";

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="relative w-full pt-[430px] tabxl:pt-[154px] pb-[55px] tabxl:pb-[124px] mb-[75px] tabxl:mb-[10px] overflow-x-clip tabxl:overflow-clip"
    >
      <ReviewsImages />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInAnimation({ x: 100 })}
        className="container max-w-[1920px] tabxl:ml-[26.5%] laptop:ml-[30.5%] mb-[61px] tabxl:mb-[71px]"
      >
        <h2
          className="w-fit pr-1 mx-auto tabxl:mx-0 mb-3 font-michelin uppercase text-32bold tabxl:text-64bold text-transparent bg-clip-text bg-caviarGradient text-center 
      tabxl:text-left"
        >
          Отзывы
        </h2>
        <p className="tabxl:max-w-[338px] text-14light tabxl:text-20light text-center tabxl:text-left">
          Трейдинг – это свобода и контроль над финансами!
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInAnimation({ x: 100 })}
      >
        <ReviewsSlider />
      </motion.div>
    </section>
  );
}
