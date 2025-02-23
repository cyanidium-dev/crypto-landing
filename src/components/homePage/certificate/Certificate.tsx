import React from "react";
import Image from "next/image";

export default function Certificate() {
  return (
    <section
      id="certificate"
      className="flex flex-col tabxl:flex-row tabxl:justify-between tabxl:items-center gap-y-[116px] tabxl:gap-x-[80px] container max-w-[1920px] scroll-mt-[82px] tabxl:scroll-mt-[124px] py-[60px] laptop:py-[93px] mb-[123px] laptop:mb-14"
    >
      <div className="tabxl:max-w-[424px] desk:max-w-full">
        <h2 className="mb-5 font-michelin uppercase text-center tabxl:text-left text-24bold tabxl:text-40bold">
          Наш сертификат
        </h2>
        <p className="font-michelin uppercase text-center tabxl:text-left text-20bold tabxl:text-24bold text-transparent bg-clip-text bg-purpleGradient">
          подтверждение профессионализма
        </p>
      </div>
      <div className="max-w-[540px] tabxl:max-w-full tabxl:w-[49.1%] mx-auto tabxl:mx-0 p-[1px] rounded-[12px] bg-caviarGradient overflow-hidden">
        <Image
          src="/images/contentImages/certificate.webp"
          alt="certificate"
          width={2000}
          height={1414}
          className="rounded-[12px]"
        />
      </div>
    </section>
  );
}
