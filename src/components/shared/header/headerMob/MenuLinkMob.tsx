import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";

interface MenuLinkProps {
  menuItem: {
    title: string;
    path: string;
  };
  className?: string;
  setIsHeaderMenuOpened: Dispatch<SetStateAction<boolean>>;
}

export default function MenuLinkMob({
  menuItem,
  className = "",
  setIsHeaderMenuOpened,
}: MenuLinkProps) {
  const { title, path } = menuItem;

  return (
    <li
      className={`relative pt-9 pb-[18px] before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[1.5px] before:w-full before:bg-caviarGradient ${className}`}
    >
      <Link
        href={`/#${path}`}
        onClick={() => setIsHeaderMenuOpened(false)}
        className="text-20reg transition duration-300 ease-out active:text-greenDark focus-visible:text-greenDark
         laptop:hover:text-greenDark outline-none active:text-pink"
      >
        {title}
      </Link>
    </li>
  );
}
