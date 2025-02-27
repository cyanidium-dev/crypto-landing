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
      } absolute z-50 top-[80px] right-0 w-[100vw] min-w-full h-[calc(100dvh-80px)] min-h-[calc(100%-80px)] pt-3 pb-14 container bg-black
      transition duration-[1000ms] overflow-y-auto`}
    >
      <NavMenuMob setIsHeaderMenuOpened={setIsHeaderMenuOpened} />
    </div>
  );
}
