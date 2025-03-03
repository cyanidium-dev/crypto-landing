"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInAnimation } from "@/helpers/animation";
import CertificateSlider from "./CertificateSlider";

export default function Certificate() {
  return (
    <section
      id="certificate"
      className="relative scroll-mt-[82px] tabxl:scroll-mt-[124px] py-[60px] laptop:py-[93px] mb-[123px] laptop:mb-14 overflow-x-clip"
    >
      <div className="hidden tabxl:block absolute -z-10 top-[204px] left-[-355px] w-[404px] h-[240px] rounded-full bg-purple blur-[250px]"></div>
      <div className="tabxl:flex flex-col tabxl:flex-row tabxl:justify-between tabxl:items-center tabxl:gap-x-[80px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInAnimation({ x: -100 })}
          className="tabxl:max-w-[424px] desk:max-w-full pl-[22px] pr-[22px] tab:pl-[30px] tab:pr-[30px] tabxl:pr-0 laptop:pl-[90px]"
        >
          <h2 className="mb-5 font-michelin uppercase text-center tabxl:text-left text-24bold tabxl:text-40bold">
            Наши сертификаты
          </h2>
          <p
            className="mb-[116px] tabxl:mb-0 font-michelin uppercase text-center tabxl:text-left text-20bold tabxl:text-24bold text-transparent bg-clip-text 
        bg-purpleGradient"
          >
            подтверждение профессионализма
          </p>
        </motion.div>

        <CertificateSlider />
      </div>
    </section>
  );
}
