import { CYANIDIUM_URL } from "@/constants/constants";
import React from "react";

export default function FooterInfo() {
  return (
    <div className="flex flex-col items-center tabxl:flex-row tabxl:justify-between gap-y-5 text-16reg">
      <p>©2025</p>

      <a
        href={CYANIDIUM_URL}
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <p className="bg-clip-text text-transparent bg-redLightYellowGradient">
          made by cyanidium.dev{" "}
        </p>
      </a>
    </div>
  );
}
