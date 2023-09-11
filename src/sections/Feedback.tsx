"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/config/styles";
import { fadeIn, staggerContainer, zoomIn } from "@/config/motion";

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-6 lg:flex-row`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="gradient-05 border=[#6a6a6a] relative flex flex-[0.5] flex-col justify-end rounded-[32px] border p-4 sm:p-8 lg:max-w-[370px]"
      >
        <div className="feedback-gradient " />
        <div>
          <h4 className="text-[26px] font-bold leading-[32px] text-white sm:text-[32px] sm:leading-[40px]">
            Samantha
          </h4>
          <p className="mt-4 text-[12px] font-normal leading-[16px] text-white sm:text-[18px] sm:leading-[22px]">
            Founder | Metaversus
          </p>
        </div>
        <p className="mt-6 text-[18px] font-normal leading-[39px] text-white sm:text-[24px] sm:leading-[45px]">
          “With the development of today&apos;s technology, metaverse is very
          useful for today&apos;s work, or can be called web 3.0. by using
          metaverse you can use it as anything”
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="relative flex flex-1 items-center justify-center"
      >
        <Image
          src="/planet-09.png"
          alt="planet"
          className="h-auto min-h-[210px] w-full rounded-[40px] object-cover lg:h-[610px]"
          width={4908}
          height={2259}
        />
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="absolute -left-[10%] top-[3%] hidden lg:block"
        >
          <Image
            src="/stamp.png"
            alt="stamp"
            className="h-[155px] w-[155px] object-contain"
            width={495}
            height={497}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
