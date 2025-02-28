import React from "react";
import MainButton from "@/components/shared/buttons/MainButton";
import { TELEGRAM_URL } from "../../../../public/telegramChatLink";
import CtaSignUpImages from "./CtaSignUpImages";
import Image from "next/image";
import AnimatedTitle from "./AnimatedTitle";

export default function CtaSignUp() {
  return (
    <section
      className="relative tabxl:flex tabxl:flex-row-reverse tabxl:items-center tabxl:justify-between scroll-mt-[82px] 
      tabxl:scroll-mt-[124px] pt-[30px] laptop:pt-[145px] pb-14 laptop:pb-[131px] 
  mb-[73px] laptop:mb-[188px] overflow-x-clip"
    >
      <CtaSignUpImages />
      <div className="tabxl:flex tabxl:flex-row-reverse tabxl:items-center tabxl:justify-between container max-w-[1920px]">
        <Image
          src="/images/contentImages/ctaSignUpMan.webp"
          alt="man in the sunglasses"
          width={1028}
          height={1232}
          className="relative -z-30 w-auto h-[440px] tabxl:h-[616px] deskxl:h-[839px] mx-auto tabxl:mx-0 object-cover overflow-visible"
        />
        <div className="tabxl:w-[51.6%] laptop:w-[41.9%] desk:w-[50%] deskxl:w-[45%] mt-[103px] tabxl:mt-0">
          <div className="max-w-[682px] desk:max-w-full mx-auto tabxl:mx-0">
            <AnimatedTitle />
            <p className="mb-7 tabxl:mb-10 text-14light tabxl:text-20light">
              Подпишись на наш Telegram и начни зарабатывать на трейдинге уже
              сегодня. Готовые стратегии, разбор сделок и обучение – всё
              бесплатно!
            </p>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="block w-full tabxl:w-[196px] max-w-[331px] mx-auto tabxl:mx-0 outline-none"
            >
              <MainButton>Подписаться</MainButton>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
