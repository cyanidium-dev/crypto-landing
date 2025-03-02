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
  );
}
