"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MainButton from "@/components/shared/buttons/MainButton";
import { TELEGRAM_URL } from "../../../../public/telegramChatLink";
import HeroImages from "./HeroImages";
import { fadeInAnimation } from "@/helpers/animation";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className="relative scroll-mt-[82px] tabxl:scroll-mt-[124px] pt-[325px] tabxl:pt-[129px] pb-14 
    tabxl:pb-[61px] mb-6 tabxl:mb-[263px] overflow-x-clip"
    >
      <HeroImages />

      <div className="container max-w-[1920px]">
        <motion.h1
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInAnimation({ x: 120, duration: 1.5 })}
          className="max-w-[682px] mx-auto tabxl:mx-0 mb-6 tabxl:mb-10 font-michelin uppercase text-center tabxl:text-left text-24bold tabxl:text-58bold"
        >
          Как поднять первую{" "}
          <span className="bg-heroTextGradient bg-clip-text text-transparent">
            1000$
          </span>{" "}
          на трейдинге
        </motion.h1>

        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInAnimation({ x: -80, delay: 0.8 })}
          className="tabxl:flex tabxl:flex-row-reverse tabxl:gap-x-[43px] tabxl:items-center tabxl:justify-start w-fit mb-9 tabxl:mb-[66px] mx-auto tabxl:mx-0"
        >
          {" "}
          <div>
            <p className="max-w-[682px] tabxl:w-[649px] mx-auto tabxl:mx-0 mb-[50px] tabxl:mb-[34px] text-16light text-center tabxl:text-left">
              Присоединяйся прямо сейчас и получай проверенные стратегии,
              аналитику, закрытые инсайды и поддержку, чтобы зарабатывать
              стабильно.
            </p>{" "}
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="block w-full tabxl:w-[592px] max-w-[592px] mx-auto tabxl:mx-0 outline-none"
            >
              <MainButton>Подписаться</MainButton>
            </a>
            <h2 className="max-w-[592px] mt-7 font-michelin text-16bold tabxl:text-24bold text-center">
              Подпишись и получи деньги
            </h2>
          </div>
        </motion.div>

        <motion.h3
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInAnimation({ y: 20, delay: 2.4 })}
          className="w-fit tabxl:w-[593px] mx-auto tabxl:mr-0 tabxl:ml-auto font-michelin uppercase text-center tabxl:text-left text-18bold tabxl:text-32bold text-transparent bg-clip-text bg-lightPinkGradient"
        >
          Трейдинг – твой Стабильный заработок
        </motion.h3>
      </div>
    </section>
  );
}
