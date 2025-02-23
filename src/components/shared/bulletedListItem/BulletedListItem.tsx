import React from "react";

interface BenefitItemProps {
  item: {
    title: string;
  };
  variant?: "caviar" | "purple";
}

export default function BulletedListItem({
  item,
  variant = "purple",
}: BenefitItemProps) {
  const { title } = item;

  return (
    <li
      className={`flex justify-center items-center w-full tabxl:w-[357px] laptop:w-[447px] max-w-[331px] tabxl:max-w-[357px] laptop:max-w-[447px] p-[1px] rounded-full ${
        variant === "purple" ? "bg-purpleGradient" : "bg-caviarGradient"
      }`}
    >
      <div className="flex flex-col justify-center w-full h-full py-[22px] tabxl:py-[17px] px-7 mob:px-9 tabxl:px-7 laptop:px-[34px] bg-black rounded-full">
        <div className="flex items-center gap-x-5 laptop:gap-x-[47px]">
          <div className="w-7 h-7 rounded-full bg-white"></div>
          <h3 className="w-[80%] whitespace-pre-line text-14light tabxl:text-16light laptop:text-18light">
            {title}
          </h3>
        </div>
      </div>
    </li>
  );
}
