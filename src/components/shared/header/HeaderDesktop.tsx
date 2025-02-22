import React from "react";
import Logo from "../logo/Logo";
import NavMenu from "../footer/navMenu/NavMenu";
import SignUpButton from "./SignUpButton";

export default function HeaderDesktop() {
  return (
    <div className="fixed z-[60] hidden tabxl:flex justify-between items-center py-[42px] container max-w-[1920px] bg-black">
      <Logo className="text-16bold" />
      <NavMenu />
      <SignUpButton />
    </div>
  );
}
