import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInAnimation } from "@/helpers/animation";

export default function AfterImages() {

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
         variants={fadeInAnimation({ scale: 0.8, duration:1.5})}
        className="tabxl:hidden absolute -z-20 top-[61px] left-[calc(50%-187.5px)] max-w-[375px] mx-auto"
      >
        <Image
          src="/images/contentImages/afterManMob.webp"
          alt="man"
          width={750}
          height={933}
          className="w-full h-auto"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
         variants={fadeInAnimation({ scale:0.8 })}
        className="hidden tabxl:block absolute -z-30 top-0 left-[calc(50%-360px)] deskxl:left-[calc(50%-430px)] 
    tabxl:w-[710px] deskxl:w-[860px] h-auto"
      >
        <Image
          src="/images/contentImages/afterManDesk.webp"
          alt="man"
          width={1422}
          height={1439}
          className="w-full h-auto"
        />
      </motion.div>

      <Image
        src="/images/backgrounds/afterSection/dollarMob.webp"
        alt="dollars"
        width="1024"
        height="559"
        className="block tabxl:hidden absolute -z-50 top-0 left-0 h-[559px] object-cover origin-center"
      />
      <Image
        src="/images/backgrounds/afterSection/dollarDesk.webp"
        alt="dollars"
        fill
        className="hidden tabxl:block absolute -z-50 top-0 left-0 object-cover"
      />
      <div className="absolute -z-[35] top-[205px] tabxl:top-[279px] left-[calc(50%-82px-42px)] tabxl:left-[calc(50%-180px)] w-[165px] tabxl:w-[226px] h-[138px] tabxl:h-[188px] bg-caviarGradient blur-[120px] tabxl:blur-[160px] supports-[backdrop-filter]:blur-[120px] supports-[backdrop-filter]:tabxl:blur-[160px] will-change-transform"></div>

      <div className="absolute -top-3 left-0 -z-[50] w-full h-[605px] tabxl:h-[829px] bg-afterSectionTopGradient"></div>

      <div className="absolute -z-20 top-[343px] tabxl:top-auto tabxl:bottom-0 left-0 w-full h-[312px] bg-bottomGradient"></div>
    </>
  );
}
