import React from "react";
import HeaderMob from "./HeaderMob";
import HeaderDesktop from "./HeaderDesktop";

export default function Header() {
  return (
    <header className="container max-w-[1920px]">
      <HeaderMob />
      <HeaderDesktop />
    </header>
  );
}
