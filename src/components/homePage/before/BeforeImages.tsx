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
        variants={fadeInAnimation({ x: -80, delay: 1 })}
        className="absolute -z-20 top-[137px] sm:top-[72px] tabxl:top-6 left-[29px] mobxl:left-[calc(50%-228px)] tabxl:left-[-91px] desk:left-[-21px] w-[514px] h-[385px] tabxl:w-[799px] deskxl:w-[900px] tabxl:h-[599px] deskxl:h-[677px] 
        object-cover origin-left overflow-visible"
      >
        <Image
          src="/images/contentImages/beforeMan.webp"
          alt="man"
          width={1598}
          height={1198}
          className="w-full h-full"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInAnimation({ x: -80 })}
        className="absolute top-[419px] sm:top-[354px] tabxl:top-auto tabxl:bottom-[68px] laptop:bottom-[88px] deskxl:bottom-10 left-[calc(50%-97px)] 
          tabxl:left-[266px] laptop:left-[300px] desk:left-[370px] deskxl:left-[416px] w-[194px] tabxl:w-[274px] h-auto"
      >
        <Image
          src="/images/contentImages/before.svg"
          alt="man"
          width={194}
          height={138}
          className="w-full h-auto"
        />
      </motion.div>

      <div
        className="absolute -z-30 top-[170px] tabxl:top-[74px] left-[calc(50%-185px)] tabxl:left-[-51px] w-[220px] tabxl:w-[342px] h-[183px] tabxl:h-[285px] 
      rounded-full bg-purple blur-[160px] tabxl:blur-[250px]"
      ></div>
      <div
        className="absolute -z-10 top-[370px] tabxl:top-[386px] left-[calc(50%-260px)] tabxl:left-[-171px] desk:left-[-81px] deskxl:left-[-11px] w-[670px] tabxl:w-[976px] h-[385px] tabxl:h-[598px] 
      rounded-full bg-black blur-[70px] tabxl:blur-[110px]"
      ></div>
    </>
  );
}
