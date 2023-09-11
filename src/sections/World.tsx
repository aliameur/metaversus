"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/config/styles";
import { staggerContainer, fadeIn, planetVariants } from "@/config/motion";
import { TypingText, TitleText } from "@/components/custom-texts";
import { newFeatures } from "@/config/data";
import { NewFeatures } from "@/components/new-features";
import { Polygon } from "@/components/icons";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer()}
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
        <div className=" absolute bottom-20 right-20 h-[70px] w-[70px] rounded-full bg-[#5d6680] p-1.5">
          <div className="relative">
            <Image
              src="/people-01.png"
              alt="people"
              className="relative z-20 h-full w-full"
              width={122}
              height={122}
            />
            <Image
              src="/people-01.png"
              alt="people"
              className="absolute inset-0 z-10 blur-[25px]"
              width={122}
              height={122}
            />

            <Polygon className="absolute bottom-1.5 left-1/2 z-0 -translate-x-1/2 translate-y-full" />
          </div>
        </div>
        <div className=" absolute left-20 top-10 h-[70px] w-[70px] rounded-full bg-[#5d6680] p-1.5 ">
          <div className="relative">
            <Image
              src="/people-02.png"
              alt="people"
              className="relative z-20 h-full w-full"
              width={122}
              height={122}
            />
            <Image
              src="/people-02.png"
              alt="people"
              className="absolute inset-0 z-10 blur-[25px]"
              width={122}
              height={122}
            />
            <Polygon className="absolute bottom-1.5 left-1/2 z-0 -translate-x-1/2 translate-y-full" />
          </div>
        </div>
        <div className=" absolute left-[45%] top-1/2 h-[70px] w-[70px] rounded-full bg-[#5d6680] p-1.5 ">
          <div className="relative">
            <Image
              src="/people-03.png"
              alt="people"
              className="relative z-20 h-full w-full"
              width={122}
              height={122}
            />
            <Image
              src="/people-03.png"
              alt="people"
              className="absolute inset-0 z-10 blur-[25px]"
              width={122}
              height={122}
            />
            <Polygon className="absolute bottom-1.5 left-1/2 z-0 -translate-x-1/2 translate-y-full" />
          </div>
        </div>
        <div className="hidden md:block absolute left-[10%] lg:left-[18%] top-72 h-[162px] w-[208px] rounded-3xl bg-[#5d6680] p-[6px]">
          <div className="relative">
            <Image
              src="/card-1.png"
              alt="card 1"
              className="relative h-full w-full rounded-[18px] object-cover"
              width={196}
              height={150}
            />

            <Image
              src="/card-1.png"
              alt="card 1"
              className="absolute inset-0 -z-10 rounded-[18px] blur-[40px]"
              width={196}
              height={150}
            />

            <h4 className="absolute bottom-4 left-4 text-[18px] font-bold text-white">
              The Upside Down
            </h4>
            <div className="absolute bottom-12 left-4 flex flex-row items-center space-x-1">
              <div className="flex flex-row -space-x-3">
                <Image
                  src="/character-01.png"
                  alt="character"
                  width={500}
                  height={500}
                  className="z-20 h-6 w-6 rounded-full"
                />
                <Image
                  src="/character-02.png"
                  alt="character"
                  width={500}
                  height={500}
                  className="z-10 h-6 w-6 rounded-full"
                />
                <Image
                  src="/character-03.png"
                  alt="character"
                  width={500}
                  height={500}
                  className="h-6 w-6 rounded-full"
                />
              </div>
              <span className="text-[12px] text-white">+264 have joined</span>
            </div>
          </div>
        </div>
        <div className="hidden md:block absolute bottom-72 right-[19%] h-[150px] w-[196px] rounded-3xl bg-[#5d6680] p-[6px]">
          <div className="relative">
            <Image
              src="/card-2.png"
              alt="card 2"
              className="h-full w-full rounded-[18px] object-cover"
              width={180}
              height={136}
            />
            <Image
              src="/card-2.png"
              alt="card 2"
              className="absolute inset-0 -z-10 rounded-[18px] blur-[40px]"
              width={180}
              height={136}
            />
            <h4 className="absolute bottom-4 left-4 text-[18px] font-bold text-white">
              Hawkins Labs
            </h4>
            <div className="absolute bottom-12 left-4 flex flex-row items-center space-x-1">
              <div className="flex flex-row -space-x-3">
                <Image
                  src="/character-01.png"
                  alt="character"
                  width={500}
                  height={500}
                  className="z-20 h-6 w-6 rounded-full"
                />
                <Image
                  src="/character-02.png"
                  alt="character"
                  width={500}
                  height={500}
                  className="z-10 h-6 w-6 rounded-full"
                />
                <Image
                  src="/character-03.png"
                  alt="character"
                  width={500}
                  height={500}
                  className="h-6 w-6 rounded-full"
                />
              </div>
              <span className="text-[12px] text-white">+264 have joined</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);
export default World;
