import React from "react";

interface MainButtonProps {
  children: React.ReactNode;
}

export default function MainButton({ children }: MainButtonProps) {
  return (
    <button
      className="relative overflow-hidden flex justify-center items-center max-w-[331px] tabxl:max-w-full w-full tabxl:w-[196px] h-10 bg-caviarGradient rounded-[20px]
      active:scale-95 focus-visible:brightness-[140%] laptop:hover:brightness-[140%] transition duration-300 ease-out outline-none group"
    >
      {children}
      <span className="absolute top-0 left-0 w-full h-full bg-white opacity-20 transition-transform duration-500 ease-in-out -translate-x-full group-hover:translate-x-full" />
    </button>
  );
}
