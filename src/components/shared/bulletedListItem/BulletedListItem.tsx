"use client";
import { motion } from "framer-motion";

interface BenefitItemProps {
  item: {
    title: string;
  };
  variant?: "caviar" | "purple";
  className?: string;
  onlyOpacity?: boolean;
}

export default function BulletedListItem({
  item,
  variant = "purple",
  className = "",
  onlyOpacity,
}: BenefitItemProps) {
  const { title } = item;

  const itemVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const itemOpacityVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.li
      variants={onlyOpacity ? itemOpacityVariants : itemVariants}
      className={`flex justify-center items-center w-full tabxl:w-[357px] laptop:w-[447px] max-w-[331px] tabxl:max-w-[357px] laptop:max-w-[447px] p-[1px] rounded-full ${
        variant === "purple" ? "bg-purpleGradient" : "bg-caviarGradient"
      } ${className}`}
    >
      <div className="flex flex-col justify-center w-full h-full py-[22px] tabxl:py-[17px] px-7 mob:px-9 tabxl:px-7 laptop:px-[34px] bg-black rounded-full">
        <div className="flex items-center gap-x-5 laptop:gap-x-[47px]">
          <div className="w-7 h-7 rounded-full bg-white"></div>
          <h3 className="w-[80%] whitespace-pre-line text-14light tabxl:text-16light laptop:text-18light">
            {title}
          </h3>
        </div>
      </div>
    </motion.li>
  );
}
