"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./sliderStyles.css";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import dynamic from "next/dynamic";
import { reviewsVedeoLinksList } from "@/constants/constants";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function ReviewsSlider() {
  return (
    <Swiper
      slidesPerView="auto"
      breakpoints={{
        0: {
          spaceBetween: 30,
          centeredSlides: true,
        },
        1024: {
          spaceBetween: 20,
          centeredSlides: false,
        },
      }}
      spaceBetween={30}
      navigation={true}
      loop={true}
      speed={1000}
      modules={[Navigation]}
    >
      {reviewsVedeoLinksList.map((link, idx) => (
        <SwiperSlide key={idx}>
          <ReactPlayer url={link} controls width="100%" height="100%" />
        </SwiperSlide>
      ))}
      <div className="hidden tabxl:block absolute z-[5] -top-6 right-[-100px] w-[260px] h-[331px] bg-sliderGradient blur-lg supports-[backdrop-filter]:blur-lg will-change-transform"></div>
    </Swiper>
  );
}
