import { useEffect, useState } from "react";

export function useSplitText(text: string) {
  const [letters, setLetters] = useState<string[]>([]);

  useEffect(() => {
    const splitText = text
      .split("")
      .map((char) => (char === " " ? "\u00A0" : char)); // Заміна пробілів на неперервні пробіли
    setLetters(splitText); // Розбиваємо текст на окремі літери і зберігаємо пробіли
  }, [text]);

  return letters;
}
