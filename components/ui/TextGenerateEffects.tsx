"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  flickerRange?: [number, number]; // Rango de índices que tendrán el efecto de titilar
}

export const TextGenerateEffect: React.FC<TextGenerateEffectProps> = ({
  words,
  className,
  flickerRange = [0, 0],
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );

    // Agregar efecto de titilación solo para el rango especificado
    const flickerElements = scope.current?.querySelectorAll("span") as NodeListOf<HTMLSpanElement>;
    flickerElements?.forEach((el, idx) => {
      if (idx >= flickerRange[0] && idx <= flickerRange[1]) {
        animate(el, { opacity: [1, 0, 1] }, { duration: 2.5, repeat: Infinity });
      }
    });
  }, [scope.current, flickerRange, animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className={`${
              idx > 2 ? "text-indigo-600" : "dark:text-white text-black"
            } opacity-0`}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

