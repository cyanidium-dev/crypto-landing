"use client";
import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownDuration = 24 * 60 * 60 * 1000;
    const now = new Date().getTime();
    const savedTime = localStorage.getItem("countdownTime");
    const countdownStart = savedTime ? parseInt(savedTime, 10) : now;

    const countdownDate = countdownStart + countdownDuration;

    const timer = setInterval(() => {
      const currentTime = new Date().getTime();
      const distance = countdownDate - currentTime;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        localStorage.removeItem("countdownTime"); // Видаляємо, якщо таймер завершився
      } else {
        setTimeLeft({
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    // Зберігаємо час початку при закритті сторінки
    const handleBeforeUnload = () => {
      localStorage.setItem("countdownTime", countdownStart.toString());
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      clearInterval(timer);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className="w-[256px] tabxl:w-[371px] mb-5 mx-auto">
      <div className="flex justify-center items-center gap-[10px] tabxl:gap-[12px] text-20bold">
        <div className="w-[66px] tabxl:w-[107px] h-[46px] tabxl:h-[47px] flex items-center justify-center rounded-[10px] border-[1.5px] border-white">
          {String(timeLeft.hours).padStart(2, "0")}
        </div>
        <span>:</span>
        <div className="w-[66px] tabxl:w-[107px] h-[46px] tabxl:h-[47px] flex items-center justify-center rounded-[10px] border-[1.5px] border-white">
          {String(timeLeft.minutes).padStart(2, "0")}
        </div>
        <span>:</span>
        <div className="w-[66px] tabxl:w-[107px] h-[46px] tabxl:h-[47px] flex items-center justify-center rounded-[10px] border-[1.5px] border-white">
          {String(timeLeft.seconds).padStart(2, "0")}
        </div>
      </div>
    </div>
  );
}
