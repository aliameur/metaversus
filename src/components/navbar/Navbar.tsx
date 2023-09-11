"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "@/config/styles";
import { navVariants } from "@/config/motion";

export const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} relative py-8 `}
  >
    <div className="gradient-01 absolute inset-0 w-1/2" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <Image
        src="/search.svg"
        alt="search"
        className="h-6 w-6 object-contain"
        height={24}
        width={24}
      />
      <h2 className="text-2xl font-extrabold leading-[30px] text-white">
        METAVERSUS
      </h2>

      <Image
        src="/menu.svg"
        alt="menu"
        className="h-6 w-6 object-contain"
        height={24}
        width={24}
      />
    </div>
  </motion.nav>
);
