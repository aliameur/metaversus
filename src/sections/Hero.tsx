"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "@/config/styles";
import { slideIn, staggerContainer, textVariant } from "@/config/motion";

const Hero = () => (
  <section className={`${styles.yPaddings} pl-6 sm:pl-16 `}>
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col `}
    >
      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Metaverse
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row items-center justify-center"
        >
          <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>ness</h1>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative -mt-3 w-full md:-mt-5"
      >
        <div className="hero-gradient absolute -top-[30px] z-0 h-[300px] w-full rounded-tl-[140px]" />
        <Image
          width={3915}
          height={2595}
          src="/cover.png"
          alt="cover"
          className="relative z-10 h-[350px] w-full rounded-tl-[140px] object-cover sm:h-[500px]"
        />
        <a
          href="#explore"
          className="relative z-10 -mt-[50px] flex w-full justify-end pr-8 sm:-mt-[70px]"
        >
          <Image
            width={3915}
            height={2595}
            src="/stamp.png"
            alt="stamp"
            className="h-[100px] w-[100px] object-contain sm:h-[155px] sm:w-[155px]"
          />
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
