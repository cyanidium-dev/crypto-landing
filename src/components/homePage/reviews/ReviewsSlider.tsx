"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./sliderStyles.css";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
      <SwiperSlide>
        <div className="w-[315px] tabxl:w-[260px] h-[401px] tabxl:h-[338px] rounded-[16px] bg-white"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[315px] tabxl:w-[260px] h-[401px] tabxl:h-[338px] rounded-[16px] bg-white"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[315px] tabxl:w-[260px] h-[401px] tabxl:h-[338px] rounded-[16px] bg-white"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[315px] tabxl:w-[260px] h-[401px] tabxl:h-[338px] rounded-[16px] bg-white"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[315px] tabxl:w-[260px] h-[401px] tabxl:h-[338px] rounded-[16px] bg-white"></div>
      </SwiperSlide>
    </Swiper>
  );
}
