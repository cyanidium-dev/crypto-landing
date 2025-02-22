import React from "react";
import Image from "next/image";

export default function CtaSignUp() {
  return (
    <section
      className="scroll-mt-[82px] tabxl:scroll-mt-[124px] pt-[30px] laptop:pt-[145px] pb-14 laptop:pb-[131px] 
  mb-[73px] laptop:mb-[188px]"
    >
      <div className="relative pl-2">
        <Image
          src="/images/contentImages/ctaSignUpMan.webp"
          alt="man in the sunglasses"
          width={1028}
          height={1232}
        />
        <Image
          src="/images/contentImages/startEarning.svg"
          alt="start earning text"
          width="316"
          height="175"
          className="absolute -bottom-[30px] left-[30px] w-[calc(100%-60px)]"
        />
      </div>
      <div className="container max-w-[1920px] mt-[103px] tabxl:mt-0">
        <h2 className="mb-4 tabxl:mb-8 font-michelin uppercase italic text-24bold tabxl:text-36bold text-transparent bg-clip-text bg-pinkGradient">
          Присоединяйся сейчас и меняй свою жизнь!
        </h2>
        <p className="mb-7 tabxl:mb-10 text-14light tabxl:text-20light">
          Подпишись на наш Telegram и начни зарабатывать на трейдинге уже
          сегодня. Готовые стратегии, разбор сделок и обучение – всё бесплатно!
        </p>
      </div>
    </section>
  );
}
