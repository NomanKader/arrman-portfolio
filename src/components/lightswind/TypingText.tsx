"use client";

import { motion, useAnimation } from "framer-motion";
import type { Variants } from "framer-motion";
import React, { useEffect, useState, type ElementType, type ReactNode } from "react";
import { cn } from "../../lib/utils";

export interface TypingTextProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  duration?: number;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  letterSpacing?: string;
  align?: "left" | "center" | "right";
  loop?: boolean;
}

export const TypingText = ({
  children,
  as: Component = "div",
  className = "",
  delay = 0,
  duration = 2,
  fontSize = "text-4xl",
  fontWeight = "font-mono",
  color = "",
  letterSpacing = "tracking-wide",
  align = "left",
  loop = true,
}: TypingTextProps) => {
  const [textContent, setTextContent] = useState("");
  const controls = useAnimation();

  useEffect(() => {
    const extractText = (node: ReactNode): string => {
      if (typeof node === "string" || typeof node === "number") return node.toString();
      if (Array.isArray(node)) return node.map(extractText).join("");
      if (React.isValidElement(node)) return extractText((node as React.ReactElement<any>).props.children);
      return "";
    };
    setTextContent(extractText(children));
  }, [children]);

  const characters = textContent.split("").map((c) => (c === " " ? "\u00A0" : c));

  const characterVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { delay: delay + i * (duration / characters.length), duration: 0.25 },
    }),
  };

  useEffect(() => {
    const runAnimation = async () => {
      do {
        await controls.start("visible");
        await new Promise((r) => setTimeout(r, 1000)); // pause after typing
        await controls.start("hidden");
      } while (loop);
    };
    runAnimation();
  }, [controls, loop]);

  return (
    <Component
      className={cn(
        "inline-flex",
        className,
        fontSize,
        fontWeight,
        color,
        letterSpacing,
        align === "center"
          ? "justify-center text-center"
          : align === "right"
          ? "justify-end text-right"
          : "justify-start text-left"
      )}
    >
      <motion.span className="inline-block" initial="hidden" animate={controls}>
        {characters.map((char, index) => (
          <motion.span key={index} className="inline-block" variants={characterVariants} custom={index}>
            {char}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
};
