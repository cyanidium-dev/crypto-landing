import React from "react";
import IconButton from "../../buttons/IconButton";
import BurgerMenuIcon from "../../icons/BurgerMenuIcon";
import CircleCloseIcon from "../../icons/CloseCircleIcon";

interface BurgerMenuButtonProps {
  isHeaderMenuOpened: boolean;
  toggleHeaderMenuOpen: () => void;
}

export default function BurgerMenuButton({
  isHeaderMenuOpened,
  toggleHeaderMenuOpen,
}: BurgerMenuButtonProps) {
  const toggleMenu = () => {
    toggleHeaderMenuOpen();
    if (isHeaderMenuOpened) {
      document.body.classList.remove("no-scroll");
    } else {
      document.body.classList.add("no-scroll");
    }
  };

  return (
    <IconButton handleClick={toggleMenu} className="relative z-[60] size-8">
      {isHeaderMenuOpened ? <CircleCloseIcon /> : <BurgerMenuIcon />}
    </IconButton>
  );
}
