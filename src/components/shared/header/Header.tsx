import React from "react";
import HeaderMob from "./headerMob/HeaderMob";
import HeaderDesktop from "./HeaderDesktop";

export default function Header() {
  return (
    <header>
      <HeaderMob />
      <HeaderDesktop />
    </header>
  );
}
