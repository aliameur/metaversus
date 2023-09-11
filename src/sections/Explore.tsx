"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "@/config/styles";
import { staggerContainer } from "@/config/motion";
import { TypingText, TitleText } from "@/components/custom-texts";
import { ExploreCard } from "@/components/explore-card";
import { exploreWorlds } from "@/config/data";

const Explore = () => {
  const [active, setActive] = useState("world-2");
  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the world you want <br className="hidden md:block" /> to
              explore{" "}
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex min-h-[70vh] flex-col gap-5 lg:flex-row">
          {exploreWorlds.map((world, idx) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={idx}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
