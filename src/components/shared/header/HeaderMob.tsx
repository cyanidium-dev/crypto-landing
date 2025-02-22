"use client";
import React, { useState } from "react";
import SignUpButton from "./SignUpButton";
import BurgerMenuButton from "./BurgerMenuButton";
import Logo from "../logo/Logo";

export default function HeaderMob() {
  const [isHeaderMenuOpened, setIsHeaderMenuOpened] = useState(false);
  const toggleHeaderMenuOpen = () => setIsHeaderMenuOpened(!isHeaderMenuOpened);

  return (
    <div className="tabxl:hidden flex items-center justify-between py-6">
      <Logo className="text-14bold w-[124px]" />
      <SignUpButton />
      <BurgerMenuButton
        isHeaderMenuOpened={isHeaderMenuOpened}
        toggleHeaderMenuOpen={toggleHeaderMenuOpen}
      />
    </div>
  );
}
