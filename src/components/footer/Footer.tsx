"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/config/styles";
import { footerVariants } from "@/config/motion";
import { socials } from "@/config/data";

export const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} relative py-8`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-wrap items-center justify-between gap-5">
        <h4 className="text-[44px] font-bold text-white md:text-[64px]">
          Enter the Metaverse
        </h4>
        <button
          type="button"
          className="flex h-fit items-center gap-4 rounded-[32px] bg-[#25618b] px-6 py-4"
        >
          <Image
            src="/headset.svg"
            alt="headset"
            className="h-[24px] w-[24px] object-contain"
            width={24}
            height={24}
          />
          <span className="text-[16px] font-normal text-white">
            ENTER METAVERSE
          </span>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-0.5 bg-white/10" />
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h4 className="text-[24px]  font-extrabold text-white">Metaversus</h4>
          <p className="text-[14px] font-normal text-white opacity-50">
            Copyright © 2021 - 2023 Metaversus. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <Image
                key={social.name}
                src={social.url}
                alt={social.name}
                className="h-[24px] w-[24px] cursor-pointer object-contain"
                width={24}
                height={24}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);
