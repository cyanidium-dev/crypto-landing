"use client";
import React from "react";
import Image from "next/image";
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
      <div className="container max-w-[1920px] flex flex-col tabxl:flex-row tabxl:justify-between tabxl:items-center mb-[116px] tabxl:gap-x-[80px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInAnimation({ x: -100 })}
          className="tabxl:max-w-[424px] desk:max-w-full"
        >
          <h2 className="mb-5 font-michelin uppercase text-center tabxl:text-left text-24bold tabxl:text-40bold">
            Наш сертификат
          </h2>
          <p
            className="font-michelin uppercase text-center tabxl:text-left text-20bold tabxl:text-24bold text-transparent bg-clip-text 
        bg-purpleGradient"
          >
            подтверждение профессионализма
          </p>
        </motion.div>

        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInAnimation({ x: 100 })}
          className="max-w-[540px] tabxl:max-w-full tabxl:w-[49.1%] mx-auto tabxl:mx-0 p-[1px] rounded-[12px] bg-caviarGradient overflow-hidden"
        >
          <Image
            src="/images/contentImages/certificate.webp"
            alt="certificate"
            width={2000}
            height={1414}
            className="rounded-[12px]"
          />
        </motion.div> */}
      </div>
      <CertificateSlider />
    </section>
  );
}
