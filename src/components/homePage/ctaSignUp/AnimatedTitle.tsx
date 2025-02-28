"use client";
import { useSplitText } from "@/hooks/useSplitText";

export default function AnimatedTitle() {
  const text = "Присоединяйся сейчас и меняй свою жизнь!";
  const letters = useSplitText(text);

  return (
    <h2 className="flex flex-wrap w-[320px] mobxl:w-[460px] tabxs:w-[620px] tabxl:w-[471px] pr-2 mb-4 tabxl:mb-8 font-michelin uppercase text-24bold tabxl:text-36bold text-transparent bg-clip-text bg-pinkGradient pink-text-flow">
      {letters.map((char, index) => (
        <span key={index}>{char}</span>
      ))}
    </h2>
  );
}
