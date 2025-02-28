import React, { useEffect, useState } from "react";

export default function AnimatedSubtitle() {
  const text = "Трейдинг – ваш путь к финансовой свободе";
  const [letters, setLetters] = useState<string[]>([]);

  useEffect(() => {
    const splitText = text
      .split("")
      .map((char) => (char === " " ? "\u00A0" : char)); // Заміна пробілів на неперервні пробіли
    setLetters(splitText); // Розбиваємо текст на окремі літери і зберігаємо пробіли
  }, []);

  return (
    <h3
      className="flex flex-wrap justify-center tabxl:justify-start w-fit tabxl:w-[566px] mx-auto tabxl:mr-0 tabxl:ml-auto font-michelin uppercase text-center text-18bold tabxl:text-32bold 
 light-pink-text-flow text-transparent bg-clip-text bg-lightPinkGradient"
    >
      {letters.map((char, index) => (
        <span key={index}>{char}</span>
      ))}
    </h3>
  );
}
