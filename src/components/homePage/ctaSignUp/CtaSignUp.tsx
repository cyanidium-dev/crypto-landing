"use client";
import React from "react";
import { motion } from "framer-motion";
import MainButton from "@/components/shared/buttons/MainButton";
import { TELEGRAM_URL } from "../../../../public/telegramChatLink";
import CtaSignUpImages from "./CtaSignUpImages";
import Image from "next/image";
import { fadeInAnimation } from "@/helpers/animation";

export default function CtaSignUp() {
  return (
    <section
      className="relative tabxl:flex tabxl:flex-row-reverse tabxl:items-center tabxl:justify-between scroll-mt-[82px] 
      tabxl:scroll-mt-[124px] pt-[30px] laptop:pt-[145px] pb-14 laptop:pb-[131px] 
  mb-[73px] laptop:mb-[188px] overflow-x-clip"
    >
      <CtaSignUpImages />
      <div className="relative w-full tabxl:flex tabxl:flex-row-reverse tabxl:items-center tabxl:justify-between">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInAnimation({
            x: 120,
            y: -60,
            duration: 0.8,
            delay: 0.5,
          })}
        >
          <Image
            src="/images/contentImages/manWithText.webp"
            alt="man in the sunglasses"
            width={1318}
            height={1383}
            className="relative -z-30 w-full max-w-[637px] tabxl:w-auto tabxl:max-w-full tabxl:h-[616px] desk:h-[720px] deskxl:h-[839px] ml-auto tabxl:mx-0 object-cover overflow-visible"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInAnimation({ x: -100 })}
          className="tabxl:w-[51.6%] laptop:w-[41.9%] desk:w-[50%] deskxl:w-[45%] mt-[73px] tabxl:mt-0"
        >
          <div className="px-[22px] md:px-[30px] tabxl:pr-0 xl:pl-[90px] max-w-[682px] desk:max-w-full mx-auto tabxl:mx-0">
            <h2
              className="pr-2 mb-4 tabxl:mb-8 font-michelin uppercase text-24bold tabxl:text-36bold text-transparent bg-clip-text 
            text-center tabxl:text-left bg-ctaSignUpTextGradient"
            >
              Присоединяйся сейчас и меняй свою жизнь!
            </h2>
            <p className="mb-4 tabxl:mb-10 text-14light tabxl:text-20light text-center tabxl:text-left">
              Подпишись на наш Telegram и начни зарабатывать на трейдинге уже
              сегодня.
            </p>
            <p className="mb-4 tabxl:mb-10 font-michelin text-16bold tabxl:text-24bold uppercase text-center tabxl:text-left">
              Мы заработаем только после того, как заработаете вы!
            </p>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="block w-full max-w-[461px] mx-auto tabxl:mx-0 outline-none"
            >
              <MainButton>Подписаться</MainButton>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
