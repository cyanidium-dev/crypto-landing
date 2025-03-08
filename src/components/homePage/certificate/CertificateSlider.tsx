"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../reviews/sliderStyles.css";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function CertificateSlider() {
  return (
    <>
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
        className="certificateSlider"
      >
        <SwiperSlide>
          <div className="w-full h-full p-[1px] rounded-[12px] bg-caviarGradient overflow-hidden">
            <Image
              src="/images/contentImages/certificate.webp"
              alt="certificate"
              width={2000}
              height={1414}
              className="w-full h-full rounded-[12px] object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full p-[1px] rounded-[12px] bg-caviarGradient overflow-hidden">
            <Image
              src="/images/contentImages/certificate2.webp"
              alt="certificate"
              width={2048}
              height={1578}
              className="w-full h-full rounded-[12px] object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full p-[1px] rounded-[12px] bg-caviarGradient overflow-hidden">
            <Image
              src="/images/contentImages/certificate3.webp"
              alt="certificate"
              width={1149}
              height={878}
              className="w-full h-full rounded-[12px] object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full p-[1px] rounded-[12px] bg-caviarGradient overflow-hidden">
            <Image
              src="/images/contentImages/certificate.webp"
              alt="certificate"
              width={2000}
              height={1414}
              className="w-full h-full rounded-[12px] object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full p-[1px] rounded-[12px] bg-caviarGradient overflow-hidden">
            <Image
              src="/images/contentImages/certificate2.webp"
              alt="certificate"
              width={2048}
              height={1578}
              className="w-full h-full rounded-[12px] object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full p-[1px] rounded-[12px] bg-caviarGradient overflow-hidden">
            <Image
              src="/images/contentImages/certificate3.webp"
              alt="certificate"
              width={1149}
              height={878}
              className="w-full h-full rounded-[12px] object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
