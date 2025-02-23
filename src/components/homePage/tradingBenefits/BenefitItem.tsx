import React from "react";

interface BenefitItemProps {
  benefit: {
    title: string;
    description: string;
  };
}

export default function BenefitItem({ benefit }: BenefitItemProps) {
  const { title, description } = benefit;

  return (
    <li className="flex justify-center items-center w-full max-w-[331px] laptop:max-w-[260px] h-[203px] p-[1px] rounded-[24px] bg-caviarGradient">
      <div className="flex flex-col justify-center items-center w-full h-full px-[59px] laptop:px-[31px] py-[44px] bg-black rounded-[24px]">
        <div className="max-w-[198px]">
          <h3 className="whitespace-pre-line mb-5 font-michelin uppercase text-16bold text-center">
            {title}
          </h3>
          <p className="max-w-[170px] mx-auto text-16light text-center">
            {description}
          </p>
        </div>
      </div>
    </li>
  );
}
