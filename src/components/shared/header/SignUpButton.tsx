import { TELEGRAM_URL } from "../../../../public/telegramChatLink";
import React from "react";

interface SignUpButtonProps {
  className?: string;
}

export default function SignUpButton({ className = "" }: SignUpButtonProps) {
  return (
    <a
      href={TELEGRAM_URL}
      target="_blank"
      rel="noopener noreferrer nofollow outline-none"
    >
      <button
        className={`flex items-center justify-center w-[126px] h-8 laptop:w-[196px] laptop:h-10 rounded-[20px] bg-headerButtonGradient 
          active:scale-95 focus-visible:brightness-[140%] laptop:hover:brightness-[140%] transition duration-300 ease-out outline-none ${className} glow-on-hover`}
      >
        <div className="flex items-center justify-center w-[124px] h-[30px] laptop:w-[194px] laptop:h-[38px] rounded-[20px] bg-black">
          <span className="text-12semi laptop:text-14semi text-transparent bg-clip-text bg-headerButtonGradient">
            Подписаться
          </span>
        </div>
      </button>
    </a>
  );
}
