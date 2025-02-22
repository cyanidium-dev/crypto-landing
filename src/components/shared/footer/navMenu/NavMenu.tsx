import React from "react";
import MenuLink from "./MenuLink";
import { menuList } from "@/constants/constants";

export default function NavMenu() {
  return (
    <nav>
      <ul className="flex flex-col tabxl:flex-row gap-y-[14px] tabxl:gap-x-[29px]">
        {menuList.map((menuItem, idx) => (
          <MenuLink key={idx} menuItem={menuItem} />
        ))}
      </ul>
    </nav>
  );
}
