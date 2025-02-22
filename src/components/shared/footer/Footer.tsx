import React from "react";
import Logo from "../logo/Logo";
import NavMenu from "./navMenu/NavMenu";
import FooterInfo from "./FooterInfo";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center tabxl:items-stretch gap-y-[50px] tabxl:gap-y-9 container max-w-[1920px] py-[52px] tabxl:pt-[92px] tabxl:pb-[58px]">
      <div className="flex flex-col tabxl:flex-row tabxl:justify-between gap-y-[50px]">
        <Logo className="text-20bold w-[187px] tabxl:w-fit text-center" />
        <NavMenu />
      </div>
      <FooterInfo />
    </footer>
  );
}
