import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link href="/">
      <span
        className={`pr-1 overflow-visible font-michelin uppercase italic text-transparent bg-clip-text bg-logoGradient ${className}`}
      >
        Нурлан о трейдинге
      </span>
    </Link>
  );
}
