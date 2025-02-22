import React from "react";
import Link from "next/link";

interface MenuLinkProps {
  menuItem: {
    title: string;
    path: string;
  };
  className?: string;
}

export default function MenuLink({ menuItem, className = "" }: MenuLinkProps) {
  const { title, path } = menuItem;

  return (
    <li className={`text-center ${className}`}>
      <Link
        href={`/#${path}`}
        className="text-16reg text-white transition duration-300 ease-out active:text-pink focus-visible:text-pink
         laptop:hover:text-pink outline-none"
      >
        {title}
      </Link>
    </li>
  );
}
