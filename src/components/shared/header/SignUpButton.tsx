import { TELEGRAM_URL } from "@/constants/constants";
import Link from "next/link";
import React from "react";

interface SignUpButtonProps {
  className?: string;
}

export default function SignUpButton({ className = "" }: SignUpButtonProps) {
  return (
    <Link href={TELEGRAM_URL}>
      <button
        className={`flex items-center justify-center w-[126px] h-8 laptop:w-[196px] laptop:h-10 rounded-[20px] bg-redYellowGradient ${className}`}
      >
        <div className="flex items-center justify-center w-[124px] h-[30px] laptop:w-[194px] laptop:h-[38px] rounded-[20px] bg-black">
          <span className="text-12semi laptop:text-14semi text-transparent bg-clip-text bg-signUpTextGradient">
            Подписаться
          </span>
        </div>
      </button>
    </Link>
  );
}
