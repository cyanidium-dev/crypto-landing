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
      rel="noopener noreferrer nofollow"
      className="outline-none"
    >
      <button
        className={`flex items-center justify-center w-full tabxl:w-[372px] max-w-[347px] tabxl:max-w-[372px] h-[50px] mx-auto rounded-[28px] tabxl:rounded-[20px] bg-purpleGradient 
          active:scale-95 focus-visible:brightness-[140%] laptop:hover:brightness-[140%] transition duration-300 ease-out outline-none ${className}`}
      >
        <span className="text-14semi">Подписаться</span>
      </button>
    </a>
  );
}
