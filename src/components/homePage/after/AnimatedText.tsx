"use client";
import React, { useEffect, useState } from "react";

export default function AnimatedText() {
  const text = "После";
  const [letters, setLetters] = useState<string[]>([]);

  useEffect(() => {
    const splitText = text
      .split("")
      .map((char) => (char === " " ? "\u00A0" : char)); // Заміна пробілів на неперервні пробіли
    setLetters(splitText); // Розбиваємо текст на окремі літери і зберігаємо пробіли
  }, []);
  return (
    <p
      className="w-fit px-1 tabxl:px-[10px] mb-3 tabxl:mb-0 mx-auto font-michelin uppercase text-center text-64bold tabxl:text-128bold 
    text-transparent bg-clip-text bg-caviarGradient caviar-text-flow"
    >
      {letters.map((char, index) => (
        <span key={index}>{char}</span>
      ))}
    </p>
  );
}
