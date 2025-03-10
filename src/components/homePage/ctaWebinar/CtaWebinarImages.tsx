import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInAnimation } from "@/helpers/animation";

export default function CtaWebinarImages() {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInAnimation({ x: 100 })}
        className="absolute -z-20 top-0 mobxl:top-[-60px] laptop:-top-[162px] left-[calc(50%-204px)] tabxl:left-auto tabxl:right-[-28px] laptop:-right-[calc(-50%+550px+105px)] 
        h-[659px] laptop:h-[821px] w-full object-cover overflow-visible"
      >
        <Image
          src="/images/backgrounds/banknote.webp"
          alt="banknote"
          width={402}
          height={402}
          className="absolute top-[330px] tabxl:top-[260px] left-[calc(50%-150px)] mobxl:left-[90px] tabxl:left-auto tabxl:right-[200px] z-[5] tabxl:-z-[10] w-[144px] 
          tabxl:w-[175px] h-auto tabxl:rotate-[-10deg]"
        />
        <Image
          src="/images/backgrounds/banknote.webp"
          alt="banknote"
          width={402}
          height={402}
          className="absolute top-[130px] tabxl:top-[400px] left-[calc(50%+40px)] mobxl:left-[290px] tabxl:left-auto tabxl:-right-3 z-[-5] w-[144px] 
          tabxl:w-[175px] h-auto rotate-[0deg] tabxl:rotate-[20deg]"
        />
        <Image
          src="/images/contentImages/ctaWebinarMan.webp"
          alt="man"
          width={1342}
          height={1671}
          className="w-auto h-[659px] object-cover overflow-visible tabxl:ml-auto"
        />
      </motion.div>

      <motion.div className="hidden tabxl:block absolute -z-[10] top-[400px] right-[calc(50%-407px)] w-[593px] h-[255px]">
        <Image
          src="/images/backgrounds/car.webp"
          alt="man"
          width={1187}
          height={1511}
          className="w-full h-auto"
        />
      </motion.div>

      <Image
        src="/images/backgrounds/oneRowDollarsDesk.webp"
        alt="dollars"
        width={1920}
        height={154}
        className="absolute -z-30 tabxl:-z-[5] top-[271px] tabxl:top-auto tabxl:bottom-0 left-0 h-[154px] object-cover object-center"
      />
      <div
        className="absolute -z-40 top-[348px] tabxl:top-[336px] right-[-237px] tabxl:right-[-156px] w-[649px] h-[747px] 
       rounded-full bg-purple blur-[150px] supports-[backdrop-filter]:blur-[150px] will-change-transform"
      ></div>
      <div
        className="absolute -z-10 top-[314px] tabxl:top-[246px] laptop:top-[310px] right-[-192px] laptop:right-[calc(50%-870px)] desk:right-[calc(50%-920px)] w-[815px]
        h-[942px] rotate-[103deg] rounded-full bg-black blur-[69px] supports-[backdrop-filter]:blur-[69px] will-change-transform"
      ></div>
    </>
  );
}
