"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/config/styles";
import { staggerContainer, fadeIn, planetVariants } from "@/config/motion";
import { TypingText, TitleText } from "@/components/custom-texts";
import { NewFeatures } from "@/components/new-features";
import { newFeatures } from "@/config/data";

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8 lg:flex-row`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex flex-[0.75] flex-col justify-center"
      >
        <TypingText title="| What's New?" />
        <TitleText title={<>What&apos;s new about Metaversus?</>} />
        <div className="mt-12 flex flex-wrap justify-between gap-6 ">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants("right")}
        className={`${styles.flexCenter} flex-1`}
      >
        <Image
          src="/whats-new.png"
          alt="get started"
          className="h-[90%] w-[90%] object-contain"
          width={1403}
          height={1535}
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
