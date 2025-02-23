import React from "react";
import Image from "next/image";
import MainButton from "@/components/shared/buttons/MainButton";
import { TELEGRAM_URL } from "../../../../public/telegramChatLink";

export default function CtaSignUp() {
  return (
    <section
      className="container max-w-[1920px] tabxl:flex tabxl:flex-row-reverse tabxl:items-center tabxl:justify-between scroll-mt-[82px] tabxl:scroll-mt-[124px] pt-[30px] laptop:pt-[145px] pb-14 laptop:pb-[131px] 
  mb-[73px] laptop:mb-[188px]"
    >
      <div className="relative max-w-[375px] tabxl:max-w-[420px] laptop:max-w-[514px] desk:max-w-[540px] deskxl:max-w-[700px] mx-auto tabxl:mx-0">
        <Image
          src="/images/contentImages/ctaSignUpMan.webp"
          alt="man in the sunglasses"
          width={1028}
          height={1232}
          className=""
        />
        <Image
          src="/images/contentImages/startEarning.svg"
          alt="start earning text"
          width="316"
          height="175"
          className="absolute -bottom-[30px] tabxl:-bottom-3 left-4 tabxl:left-10 w-[90%]"
        />
      </div>
      <div className="tabxl:w-[51.6%] laptop:w-[41.9%] desk:w-[50%] deskxl:w-[45%] mt-[103px] tabxl:mt-0">
        <div className="max-w-[682px] desk:max-w-full mx-auto">
          <h2 className="pr-2 mb-4 tabxl:mb-8 font-michelin uppercase text-24bold tabxl:text-36bold text-transparent bg-clip-text bg-pinkGradient">
            Присоединяйся сейчас и меняй свою жизнь!
          </h2>
          <p className="mb-7 tabxl:mb-10 text-14light tabxl:text-20light">
            Подпишись на наш Telegram и начни зарабатывать на трейдинге уже
            сегодня. Готовые стратегии, разбор сделок и обучение – всё
            бесплатно!
          </p>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="block w-full tabxl:w-[196px] max-w-[331px] mx-auto tabxl:mx-0"
          >
            <MainButton>Подписаться</MainButton>
          </a>
        </div>
      </div>
    </section>
  );
}
