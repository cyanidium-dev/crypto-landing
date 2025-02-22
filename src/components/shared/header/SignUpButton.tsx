import React from "react";

export default function SignUpButton() {
  return (
    <button className="flex items-center justify-center w-[126px] h-8 laptop:w-[196px] laptop:h-10 rounded-[20px] bg-redYellowGradient">
      <div className="flex items-center justify-center w-[124px] h-[30px] laptop:w-[194px] laptop:h-[38px] rounded-[20px] bg-black">
        <span className="text-12semi laptop:text-14semi text-transparent bg-clip-text bg-signUpTextGradient">
          Подписаться
        </span>
      </div>
    </button>
  );
}
