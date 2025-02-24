import MainButton from "@/components/shared/buttons/MainButton";
import React from "react";
import { TELEGRAM_URL } from "../../../../public/telegramChatLink";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative container max-w-[1920px] scroll-mt-[82px] tabxl:scroll-mt-[124px] pt-[325px] tabxl:pt-[129px] pb-14 
    tabxl:pb-[61px] mb-6 tabxl:mb-[263px] overflow-hidden"
    >
      <Image
        src="/images/contentImages/ctaWebinarMan.webp"
        alt="man"
        width={640}
        height={640}
        className="absolute -z-10 -top-[113px] tabxl:-top-[162px] w-[566px] tabxl:w-[873px] h-[566px] tabxl:h-[873px] -right-[48px] sm:right-[calc(50%-283px-48px)]
              tabxl:-right-[147px] laptop:-right-[77px] desk:right-0 object-cover origin-center overflow-visible"
      />
      <h1 className="max-w-[682px] mx-auto tabxl:mx-0 mb-6 tabxl:mb-10 font-michelin uppercase text-center tabxl:text-left text-24bold tabxl:text-58bold">
        Как поднять первую 1000$ на трейдинге
      </h1>
      <div className="tabxl:flex tabxl:flex-row-reverse tabxl:gap-x-[43px] tabxl:items-center tabxl:justify-start w-fit mb-9 tabxl:mb-[138px] mx-auto tabxl:mx-0">
        <p className="max-w-[682px] tabxl:w-[354px] mx-auto tabxl:mx-0 mb-[50px] tabxl:mb-0 text-16light text-center tabxl:text-left">
          Присоединяйся прямо сейчас и получай проверенные стратегии, аналитику,
          закрытые инсайды и поддержку, чтобы зарабатывать стабильно.
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
      <h3 className="w-fit tabxl:w-[566px] mx-auto tabxl:mr-0 tabxl:ml-auto font-michelin uppercase text-center text-18bold tabxl:text-32bold text-transparent bg-clip-text bg-lightPinkGradient">
        Трейдинг – ваш путь к финансовой свободе
      </h3>
    </section>
  );
}
