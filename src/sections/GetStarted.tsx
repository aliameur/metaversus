"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/config/styles";
import { staggerContainer, fadeIn, planetVariants } from "@/config/motion";
import { TypingText, TitleText } from "@/components/custom-texts";
import { StartSteps } from "@/components/start-steps";
import { startingFeatures } from "@/config/data";

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8 lg:flex-row`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`${styles.flexCenter} flex-1`}
      >
        <Image
          src="/get-started.png"
          alt="get started"
          className="h-[90%] w-[90%] object-contain"
          width={1403}
          height={1535}
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex flex-[0.75] flex-col justify-center"
      >
        <TypingText title="| How Metaversus Works" />
        <TitleText title={<>Get started with just a few clicks</>} />
        <div className="mt-[31px] flex max-w-[370px] flex-col gap-6 ">
          {startingFeatures.map((feature, idx) => (
            <StartSteps key={feature} number={idx + 1} text={feature} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
