"use client"
import { useEffect, useState } from "react";

export default function BirthdayWish() {
  const [animatedText, setAnimatedText] = useState("");
  const fullText = "Happy Birthday, Pulkit!";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setAnimatedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center bg-gradient-to-r from-blue-500 to-red-500 text-white">
      <h1 className="text-4xl sm:text-6xl font-bold mb-6">{animatedText}</h1>
      <p className="max-w-2xl text-lg sm:text-xl leading-relaxed bg-black/40 p-4 rounded-lg shadow-lg">
        From crafting sleek UIs in <strong>React</strong> to sketching ideas on <strong>Canvas</strong>, you&apos;ve turned creativity into code and made pixels dance to your rhythm. 🚀
      </p>
      <p className="mt-4 max-w-2xl text-lg sm:text-xl leading-relaxed bg-black/40 p-4 rounded-lg shadow-lg">
        May your <strong>bug fixes be instant</strong>, your <strong>deployments be smooth</strong>, and your <strong>LeetCode streak stay unbroken</strong>! 🏆
      </p>
      <p className="mt-4 max-w-2xl text-lg sm:text-xl leading-relaxed bg-black/40 p-4 rounded-lg shadow-lg">
        This year, I hope you <strong>rock your fresh style</strong>, keep your <strong>wavy curls flowing</strong>, and maybe even have that long-awaited <strong>confident conversation</strong> with your senior. 😉✨
      </p>
      <p className="mt-4 max-w-2xl text-lg sm:text-xl leading-relaxed bg-black/40 p-4 rounded-lg shadow-lg">
        May your <strong>burgers always be juicy</strong>, your <strong>dental checkups be cavity-free</strong>, and your <strong>Git commits always be meaningful</strong>! 🎂🔥
      </p>
      <p className="mt-4 max-w-2xl text-lg sm:text-xl leading-relaxed bg-black/40 p-4 rounded-lg shadow-lg">
        Here&apos;s to another year of innovation, growth, and <strong>badass projects</strong>. Keep being the <strong>legend you are</strong>! 🎈🎁🎊
      </p>
    </div>
  );
}
