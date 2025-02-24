import React from "react";
import Image from "next/image";
import ReviewsSlider from "./ReviewsSlider";

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="relative w-full pt-[430px] tabxl:pt-[154px] pb-[55px] tabxl:pb-[124px] mb-[75px] tabxl:mb-[10px] overflow-hidden"
    >
      <Image
        src="/images/contentImages/reviewsMan.webp"
        alt="man"
        width={1024}
        height={768}
        className="absolute -z-10 -top-4 tabxl:top-[137px] left-[calc(50%-322px+12px)] tabxl:-left-[90px] w-[644px] max-w-[644px] h-[483px] object-cover origin-center overflow-visible"
      />
      <div className="container max-w-[1920px] tabxl:ml-[35.5%] laptop:ml-[30.5%] mb-[61px] tabxl:mb-[71px]">
        <h2
          className="mb-3 font-michelin uppercase text-32bold tabxl:text-64bold text-transparent bg-clip-text bg-caviarGradient text-center 
      tabxl:text-left"
        >
          Отзывы
        </h2>
        <p className="tabxl:max-w-[338px] text-14light tabxl:text-20light text-center tabxl:text-left">
          Трейдинг – это свобода и контроль над финансами!
        </p>
      </div>
      <ReviewsSlider />
    </section>
  );
}
