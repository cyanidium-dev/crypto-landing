import React from "react";

interface MainButtonProps {
  children: React.ReactNode;
}

export default function MainButton({ children }: MainButtonProps) {
  return (
    <button
      className="flex justify-center items-center max-w-[331px] tabxl:max-w-full w-full tabxl:w-[196px] h-10 bg-caviarGradient rounded-[20px]
    active:scale-95 transition duration-300 ease-out"
    >
      {children}
    </button>
  );
}
