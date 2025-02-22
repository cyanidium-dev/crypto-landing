import React from "react";

export default function FooterInfo() {
  return (
    <div className="flex flex-col items-center tabxl:flex-row tabxl:justify-between gap-y-5 text-16reg">
      <p>©2025</p>
      <p className="bg-clip-text text-transparent bg-redLightYellowGradient">
        Сайт разработали - cyanidium.dev
      </p>
    </div>
  );
}
