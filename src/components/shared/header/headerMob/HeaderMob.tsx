"use client";
import React, { useState } from "react";
import SignUpButton from "../SignUpButton";
import BurgerMenuButton from "./BurgerMenuButton";
import Logo from "../../logo/Logo";
import BurgerMenu from "./BurgerMenu";

export default function HeaderMob() {
  const [isHeaderMenuOpened, setIsHeaderMenuOpened] = useState(false);
  const toggleHeaderMenuOpen = () => setIsHeaderMenuOpened(!isHeaderMenuOpened);

  return (
    <div className="fixed z-10 tabxl:hidden flex items-center justify-between py-6 container max-w-[1920px] bg-black">
      <Logo className="relative z-[60] text-14bold w-[124px] tab:w-fit" />
      <SignUpButton className="relative z-[60]" />
      <BurgerMenuButton
        isHeaderMenuOpened={isHeaderMenuOpened}
        toggleHeaderMenuOpen={toggleHeaderMenuOpen}
      />
      <BurgerMenu
        isHeaderMenuOpened={isHeaderMenuOpened}
        setIsHeaderMenuOpened={setIsHeaderMenuOpened}
      />
    </div>
  );
}
