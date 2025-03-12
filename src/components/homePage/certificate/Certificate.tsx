"use client";
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
      <div className="hidden tabxl:block absolute -z-10 top-[204px] left-[-355px] w-[404px] h-[240px] rounded-full bg-purple blur-[250px] supports-[backdrop-filter]:blur-[250px] will-change-transform"></div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInAnimation({ scale: 0.8, duration: 1.5, delay: 0.8 })}
        className="absolute bottom-0 left-5 tabxl:left-[494px] desk:left-[584px] z-10 w-[74px] tabxl:w-[118px] h-auto"
      >
        <Image
          src="/images/icons/dollar.svg"
          alt="dollar"
          width="66"
          height="110"
          className="w-full h-full"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInAnimation({ scale: 0.8, duration: 1.5, delay: 0.8 })}
        className="absolute bottom-7 tabxl:bottom-12 left-[102px] tabxl:left-[630px] desk:left-[720px] z-10 w-[37px] tabxl:w-[59px] h-auto"
      >
        <Image
          src="/images/icons/dollar.svg"
          alt="dollar"
          width="66"
          height="110"
          className="w-full h-full"
        />
      </motion.div>
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
        bg-certificateTextGradient"
          >
            подтверждение профессионализма
          </p>
        </motion.div>

        <CertificateSlider />
      </div>
    </section>
  );
}
