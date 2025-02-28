"use client";
import { useSplitText } from "@/hooks/useSplitText";

export default function AnimatedSubtitle() {
  const text = "Трейдинг – ваш путь к финансовой свободе";
  const letters = useSplitText(text);

  return (
    <h3
      className="flex flex-wrap justify-center tabxl:justify-start max-w-[331px] tabxl:max-w-[566px] tabxl:w-[566px] mx-auto tabxl:mr-0 tabxl:ml-auto font-michelin uppercase text-center text-18bold tabxl:text-32bold 
 light-pink-text-flow text-transparent bg-clip-text bg-lightPinkGradient"
    >
      {letters.map((char, index) => (
        <span key={index}>{char}</span>
      ))}
    </h3>
  );
}
