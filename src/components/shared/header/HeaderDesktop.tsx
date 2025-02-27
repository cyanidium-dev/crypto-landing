import React from "react";
import Logo from "../logo/Logo";
import NavMenu from "../footer/navMenu/NavMenu";
import SignUpButton from "./SignUpButton";

export default function HeaderDesktop() {
  return (
    <div className="fixed z-[60] hidden tabxl:block w-[100vw] bg-black">
      <div className="flex justify-between items-center py-[42px] container max-w-[1920px] mx-auto">
        <Logo className="text-16bold" />
        <NavMenu />
        <SignUpButton />
      </div>
    </div>
  );
}
