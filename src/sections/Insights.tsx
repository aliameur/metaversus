"use client";

import { motion } from "framer-motion";
import styles from "@/config/styles";
import { staggerContainer } from "@/config/motion";
import { TypingText, TitleText } from "@/components/custom-texts";
import { InsightCard } from "@/components/insight-card";
import { insights } from "@/config/data";

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText title="Insight about metaverse" textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((insight, idx) => (
          <InsightCard key={`insight-${idx}`} index={idx + 1} {...insight} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
