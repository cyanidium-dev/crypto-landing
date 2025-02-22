import React, { Dispatch, SetStateAction } from "react";
import NavMenuMob from "./NavMenuMob";

interface BurgerMenuMobTabProps {
  isHeaderMenuOpened: boolean;
  setIsHeaderMenuOpened: Dispatch<SetStateAction<boolean>>;
}

export default function BurgerMenu({
  isHeaderMenuOpened,
  setIsHeaderMenuOpened,
}: BurgerMenuMobTabProps) {
  return (
    <div
      className={`${
        isHeaderMenuOpened
          ? "translate-x-0 opacity-100 no-doc-scroll"
          : "translate-x-full opacity-0"
      } absolute top-0 right-0 z-50 w-[100vw] max-w-full h-[100dvh] pt-[94px] pb-14 container bg-black
      transition duration-[600ms] overflow-y-auto`}
    >
      <NavMenuMob setIsHeaderMenuOpened={setIsHeaderMenuOpened} />
    </div>
  );
}
