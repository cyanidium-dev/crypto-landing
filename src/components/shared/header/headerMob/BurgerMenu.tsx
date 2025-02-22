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
      } absolute top-[82px] right-0 w-[100vw] max-w-full h-[calc(100dvh-82px)] pt-3 pb-14 container bg-black
      transition duration-[600ms] overflow-y-auto`}
    >
      <NavMenuMob setIsHeaderMenuOpened={setIsHeaderMenuOpened} />
    </div>
  );
}
