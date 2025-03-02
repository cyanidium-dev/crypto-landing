import React from "react";

interface MainButtonProps {
  children: React.ReactNode;
}

export default function MainButton({ children }: MainButtonProps) {
  return (
    <button
      className="relative overflow-hidden flex justify-center items-center max-w-[331px] tabxl:max-w-full w-full tabxl:w-[196px] h-10 bg-caviarGradient rounded-[20px]
      active:scale-95 focus-visible:brightness-[140%] transition duration-300 ease-out outline-none group"
    >
      {children}
      <span className="absolute top-0 left-[-150%] w-[100%] h-full bg-gradient-to-r from-white/20 via-[#FFD700]/50 to-white/20 opacity-70 skew-x-[-40deg] group-hover:left-[120%] transition-all duration-[800ms] ease-in-out" />
    </button>
  );
}
