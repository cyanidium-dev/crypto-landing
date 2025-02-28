"use client";
import MainButton from "@/components/shared/buttons/MainButton";
import { TELEGRAM_URL } from "../../../../public/telegramChatLink";
import HeroImages from "./HeroImages";
import AnimatedSubtitle from "./AnimatedSubtitle";

export default function Hero() {
  return (
    <section
      className="relative scroll-mt-[82px] tabxl:scroll-mt-[124px] pt-[325px] tabxl:pt-[129px] pb-14 
    tabxl:pb-[61px] mb-6 tabxl:mb-[263px] overflow-x-clip"
    >
      <HeroImages />
      <div className="container max-w-[1920px]">
        <h1 className="max-w-[682px] mx-auto tabxl:mx-0 mb-6 tabxl:mb-10 font-michelin uppercase text-center tabxl:text-left text-24bold tabxl:text-58bold">
          Как поднять первую 1000$ на трейдинге
        </h1>
        <div className="tabxl:flex tabxl:flex-row-reverse tabxl:gap-x-[43px] tabxl:items-center tabxl:justify-start w-fit mb-9 tabxl:mb-[138px] mx-auto tabxl:mx-0">
          <p className="max-w-[682px] tabxl:w-[354px] mx-auto tabxl:mx-0 mb-[50px] tabxl:mb-0 text-16light text-center tabxl:text-left">
            Присоединяйся прямо сейчас и получай проверенные стратегии,
            аналитику, закрытые инсайды и поддержку, чтобы зарабатывать
            стабильно.
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
        <AnimatedSubtitle />
      </div>
    </section>
  );
}
