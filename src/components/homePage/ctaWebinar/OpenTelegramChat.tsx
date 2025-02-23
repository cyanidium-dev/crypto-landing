import React from "react";
import SignUpButton from "./SignUpButton";

export default function OpenTelegramChat() {
  return (
    <div className="max-w-[682px] tabxl:max-w-[1100px] py-[44px] tabxl:py-[35px] px-[35px] mx-auto mt-14 tabxl:mt-16 rounded-[26px] bg-caviarGradient">
      <h3 className="max-w-[347px] tabxl:max-w-[488px] mx-auto mb-4 font-michelin uppercase text-16bold tabxl:text-24bold text-center">
        Открыли канал на 24 часа для первых 100 зашедших пользователей
      </h3>
      <p className="mb-7 tabxl:mb-6 font-michelin uppercase text-12bold tabxl:text-16bold text-center">
        после доступ будет стоить 99$
      </p>
      <SignUpButton />
    </div>
  );
}
