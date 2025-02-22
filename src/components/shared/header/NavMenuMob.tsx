import React, { Dispatch, SetStateAction } from "react";
import { menuList } from "@/constants/constants";
import MenuLinkMob from "./MenuLinkMob";

interface NavMenuMobProps {
  setIsHeaderMenuOpened: Dispatch<SetStateAction<boolean>>;
}

export default function NavMenuMob({ setIsHeaderMenuOpened }: NavMenuMobProps) {
  return (
    <nav>
      <ul>
        {menuList.map((menuItem, idx) => (
          <MenuLinkMob
            key={idx}
            menuItem={menuItem}
            setIsHeaderMenuOpened={setIsHeaderMenuOpened}
          />
        ))}
      </ul>
    </nav>
  );
}
