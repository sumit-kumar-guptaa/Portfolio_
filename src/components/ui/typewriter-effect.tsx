"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      const currentWord = wordsArray[currentWordIndex];

      if (isDeleting) {
        setCurrentCharIndex((prevCharIndex) => prevCharIndex - 1);

        if (currentCharIndex === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prevWordIndex) =>
            prevWordIndex === wordsArray.length - 1 ? 0 : prevWordIndex + 1
          );
        }
      } else {
        setCurrentCharIndex((prevCharIndex) => prevCharIndex + 1);

        if (currentCharIndex === currentWord.text.length) {
          setIsDeleting(true);
        }
      }
    }, 80);

    return () => clearInterval(typingEffect);
  }, [currentWordIndex, currentCharIndex, isDeleting, wordsArray]);

  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}
    >
      {wordsArray.map((word, idx) => {
        return (
          <div key={`word-${idx}`} className="inline">
            {word.text.map((char, index) => (
              <span
                key={`char-${index}`}
                className={cn(`dark:text-white text-black `, word.className)}
              >
                {index < currentCharIndex && idx === currentWordIndex
                  ? char
                  : ""}
              </span>
            ))}
          </div>
        );
      })}
      <span
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
          cursorClassName
        )}
      ></span>
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });
  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline">
              {word.text.map((char, index) => (
                <span
                  key={`char-${index}`}
                  className={cn(`dark:text-white text-black `, word.className)}
                >
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <div className="overflow-hidden pb-2">
        <div
          className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {renderWords()}{" "}
        </div>
      </div>
      <span
        className={cn(
          "block rounded-sm w-[4px]  h-4 sm:h-6 xl:h-12 bg-blue-500",
          cursorClassName
        )}
      ></span>
    </div>
  );
};
