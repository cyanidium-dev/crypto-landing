import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link href="/" className="flex justify-center">
      <p
        className={`pr-1 overflow-visible font-michelin uppercase text-transparent bg-clip-text bg-logoGradient ${className}`}
      >
        Нурлан о трейдинге
      </p>
    </Link>
  );
}
