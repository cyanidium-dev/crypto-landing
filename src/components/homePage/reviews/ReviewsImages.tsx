"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInAnimation } from "@/helpers/animation";

export default function ReviewsImages() {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInAnimation({ scale: 0.8 })}
        className="absolute -z-20 -top-4 tabxl:top-[137px] left-[calc(50%-322px+12px)] tabxl:-left-[90px] w-[644px] max-w-[644px] h-[483px] object-cover origin-center overflow-visible"
      >
        <Image
          src="/images/contentImages/reviewsMan.webp"
          alt="man"
          width={1024}
          height={768}
          className="w-full h-full"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInAnimation({ x: 100 })}
      >
        <Image
          src="/images/backgrounds/oneRowDollarsDesk.webp"
          alt="man"
          width={1920}
          height={154}
          className="hidden tabxl:block absolute z-10 top-[131px] tabxl:left-[79%] laptop:left-[69%] h-[154px] object-cover object-left overflow-visible"
        />
      </motion.div>

      <div className="absolute -z-30 top-[162px] tabxl:top-[315px] right-[calc(50%-478px)] tabxl:right-auto tabxl:left-[38px] w-[649px] h-[747px] rounded-full bg-purple blur-[150px] supports-[backdrop-filter]:blur-[150px] will-change-transform"></div>

      <div className="absolute -z-10 top-[188px] tabxl:top-[315px] right-[calc(50%-436px)] tabxl:right-auto tabxl:left-[-215px] w-[748px] tab:w-[1048px] tabxl:w-[1307px] h-[696px] tabxl:h-[1216px] rounded-full bg-black blur-[85px] tabxl:blur-[150px] supports-[backdrop-filter]:blur-[85px] supports-[backdrop-filter]:tabxl:blur-[150px] will-change-transform"></div>
    </>
  );
}
