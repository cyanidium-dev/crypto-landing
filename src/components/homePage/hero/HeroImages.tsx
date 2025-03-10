import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInAnimation } from "@/helpers/animation";

export default function HeroImages() {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInAnimation({ scale: 0.8, delay: 1.3, duration: 1.7 })}
        className="absolute -z-[80] -top-[124px] tabxl:-top-[113px] w-[481px] tabxl:w-[666px] h-[599px] tabxl:h-[829px] 
          left-[calc(50%-240px+15px)] tabxl:left-auto tabxl:right-0 overflow-visible"
      >
        <Image
          src="/images/contentImages/heroMan.webp"
          alt="man"
          width={1332}
          height={1658}
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInAnimation({ scale: 0.9, delay: 0.3, duration: 1.2 })}
        className="tabxl:hidden absolute -z-[40] left-1 top-[-161px] w-full h-[443px] overflow-visible"
      >
        <Image
          src="/images/backgrounds/heroSection/dollarsMob.webp"
          alt="dollars"
          width={1028}
          height={443}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInAnimation({ scale: 0.7, duration: 2.2 })}
        className="hidden tabxl:block absolute -z-[40] tabxl:top-[157px] tabxl:h-[559px] tabxl:left-[-17px] overflow-visible"
      >
        <Image
          src="/images/backgrounds/heroSection/dollarsDesk.webp"
          alt="dollars"
          width={680}
          height={559}
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInAnimation({ scale: 0.9, duration: 1.5, delay: 2.4 })}
        className="absolute top-[78px] tabxl:top-[65px] left-[calc(50%-232px)] tabxl:left-auto tabxl:right-[2px] -z-[35] rotate-[3.4deg] w-[489px] h-[364px]"
      >
        <Image
          src="/images/backgrounds/heroSection/banknotes.webp"
          alt="banknotes"
          width={1342}
          height={1671}
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInAnimation({ scale: 0.8, delay: 1.6 })}
        className="absolute -z-30 -top-[119px] tabxl:top-[-139px] w-[473px] tabxl:w-[671px] h-[589px] tabxl:h-[835px] 
          left-[calc(50%-237px+17px)] tabxl:left-auto tabxl:right-[-20px] overflow-visible"
      >
        <Image
          src="/images/contentImages/ctaWebinarMan.webp"
          alt="man"
          width={1342}
          height={1671}
        />
      </motion.div>

      <div
        className="absolute -z-40 top-[-436px] tabxl:top-[-496px] left-[calc(50%-369px-225px)] tabxl:left-[-24px] 
        w-[738px] h-[681px] tabxl:w-[1125px] tabxl:h-[1039px] rounded-full bg-black blur-[98px] tabxl:blur-[150px] supports-[backdrop-filter]:blur-[98px] supports-[backdrop-filter]:tabxl:blur-[150px] will-change-transform"
      />
      <div
        className="absolute -z-50 top-[203px] tabxl:top-[-41px] left-[calc(50%-369px+132px)] tabxl:left-[-220px] 
        w-[738px] tabxl:w-[901px] h-[681px] tabxl:h-[677px] tabxl:rotate-[27.22deg] rounded-full bg-black blur-[98px] tabxl:blur-[200px] supports-[backdrop-filter]:blur-[98px] supports-[backdrop-filter]:tabxl:blur-[200px] will-change-transform"
      />
      <div
        className="absolute -z-20 top-[252px] tabxl:top-[451px] left-[calc(50%-320px)] tabxl:left-auto tabxl:right-[-67px] 
        w-[640px] tabxl:w-[865px] h-[350px] tabxl:h-[519px] rounded-full bg-black blur-[89px] tabxl:blur-[132px] supports-[backdrop-filter]:blur-[89px] supports-[backdrop-filter]:tabxl:blur-[132px] will-change-transform"
      />
      <div
        className="hidden tabxl:block absolute -z-20 tabxl:top-[270px] tabxl:right-[-361px] tabxl:w-[1125px] 
        tabxl:h-[1039px] rounded-full bg-black tabxl:blur-[150px] supports-[backdrop-filter]:blur-[150px] will-change-transform"
      />
      <div
        className="absolute -z-[70] top-[147px] tabxl:top-[184px] left-[calc(50%-213px+77px)] tabxl:left-auto tabxl:right-[-77px] 
        w-[426px] tabxl:w-[649px] h-[490px] tabxl:h-[747px] rounded-full bg-purple blur-[128px] tabxl:blur-[150px] supports-[backdrop-filter]:blur-[128px] supports-[backdrop-filter]:tabxl:blur-[150px] will-change-transform"
      />
      <div
        className="hidden tabxl:block absolute -z-[50] tabxl:top-[-630px] tabxl:left-[-504px] tabxl:w-[785px] 
        tabxl:h-[747px] rounded-full bg-purple tabxl:blur-[150px] supports-[backdrop-filter]:tabxl:blur-[150px] will-change-transform"
      />
      <div
        className="absolute -z-[75] top-[-137px] tabxl:top-[-175px] right-[calc(50%-241px-304px)] tabxl:right-[calc(471px)] 
        w-[470px] tabxl:w-[698px] h-[1178px] tabxl:h-[1205px] rounded-full bg-black blur-[68px] supports-[backdrop-filter]:blur-[68px] will-change-transform"
      />
    </>
  );
}
