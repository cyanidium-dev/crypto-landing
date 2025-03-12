"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInAnimation } from "@/helpers/animation";

export default function BeforeImages() {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInAnimation({ x: -80, delay: 0.2 })}
        className="absolute -z-[70] top-[73px] sm:top-[22px] tabxl:top-[-60px] left-[29px] mobxl:left-[calc(50%-228px)] tabxl:left-0 desk:left-[-21px] w-[657px] h-[420px] tabxl:w-[799px] deskxl:w-[900px] tabxl:h-[599px] deskxl:h-[677px] 
        object-cover origin-left overflow-visible"
      >
        <Image
          src="/images/contentImages/beforeManMob.webp"
          alt="man"
          width={750}
          height={1935}
          className="tabxl:hidden w-[375px] h-auto"
        />
        <Image
          src="/images/contentImages/beforeManDesk.webp"
          alt="man"
          width={854}
          height={1935}
          className="hidden tabxl:block w-[427px] h-auto"
        />
        <Image
          src="/images/contentImages/banknotesBefore.webp"
          alt="banknotes"
          width={726}
          height={684}
          className="top-[114px] tabxl:top-[221px] left-0 tabxl:left-[66px] absolute -z-30 w-[328px] h-auto tabxl:rotate-90"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInAnimation({ x: -80, delay: 0.2 })}
        className="absolute top-[419px] sm:top-[354px] tabxl:top-[404px] left-[calc(50%-97px)] 
          tabxl:left-[156px] w-[194px] tabxl:w-[274px] h-auto"
      >
        <Image
          src="/images/contentImages/before.svg"
          alt="before"
          width={194}
          height={138}
          className="w-full h-auto"
        />
      </motion.div>

      <div
        className="absolute -z-[80] top-[170px] tabxl:top-[74px] left-[calc(50%-185px)] tabxl:left-[-51px] w-[220px] tabxl:w-[342px] h-[183px] tabxl:h-[285px] 
      rounded-full bg-purple blur-[160px] tabxl:blur-[250px] supports-[backdrop-filter]:blur-[160px] supports-[backdrop-filter]:tabxl:blur-[250px] will-change-transform"
      ></div>
      <div
        className="absolute -z-10 top-[370px] tabxl:top-[386px] left-[calc(50%-260px)] tabxl:left-[-171px] desk:left-[-81px] deskxl:left-[-11px] w-[670px] tabxl:w-[976px] h-[385px] tabxl:h-[598px] 
      rounded-full bg-black blur-[70px] tabxl:blur-[110px] supports-[backdrop-filter]:blur-[70px] supports-[backdrop-filter]:tabxl:blur-[110px] will-change-transform"
      ></div>
      <div></div>
    </>
  );
}
