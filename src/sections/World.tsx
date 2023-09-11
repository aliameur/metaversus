"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/config/styles";
import { staggerContainer, fadeIn, planetVariants } from "@/config/motion";
import { TypingText, TitleText } from "@/components/custom-texts";
import { newFeatures } from "@/config/data";
import { NewFeatures } from "@/components/new-features";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex h-[550px] w-full"
      >
        <Image
          src="/map.png"
          alt="map"
          className="h-full w-full object-cover"
          width={3510}
          height={1578}
        />
        <div className="absolute bottom-20 right-20 h-[70px] w-[70px] rounded-full bg-[#5d6680] p-1.5 ">
          <Image
            src="/people-01.png"
            alt="people"
            className="h-full w-full"
            width={122}
            height={122}
          />
        </div>
        <div className="absolute left-20 top-10 h-[70px] w-[70px] rounded-full bg-[#5d6680] p-1.5 ">
          <Image
            src="/people-02.png"
            alt="people"
            className="h-full w-full"
            width={122}
            height={122}
          />
        </div>
        <div className="absolute left-[45%] top-1/2 h-[70px] w-[70px] rounded-full bg-[#5d6680] p-1.5 ">
          <Image
            src="/people-03.png"
            alt="people"
            className="h-full w-full"
            width={122}
            height={122}
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);
export default World;
