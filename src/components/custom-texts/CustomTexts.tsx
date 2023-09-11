"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "@/config/motion";
import { ReactNode } from "react";

interface TextProps {
  title: string | ReactNode;
  textStyles?: string;
}

export const TypingText = ({ title, textStyles = "" }: TextProps) => (
  <motion.p
    variants={textContainer}
    className={`text-[14px] font-normal text-secondary-white ${textStyles}`}
  >
    {Array.from(title as string).map((letter, idx) => (
      <motion.span variants={textVariant2} key={idx}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }: TextProps) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-2 text-[40px] font-bold text-white md:text-[64px] ${textStyles}`}
  >
    {title}
  </motion.h2>
);
