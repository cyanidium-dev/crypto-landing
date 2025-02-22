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
  return (
    <IconButton
      handleClick={toggleHeaderMenuOpen}
      className="relative z-[60] size-8"
    >
      {isHeaderMenuOpened ? <CircleCloseIcon /> : <BurgerMenuIcon />}
    </IconButton>
  );
}
