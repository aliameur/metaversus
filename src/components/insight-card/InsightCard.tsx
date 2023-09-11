"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/config/motion";

interface InsightCardProps {
  imgUrl: string;
  title: string;
  subtitle: string;
  index: number;
}

export const InsightCard = ({
  imgUrl,
  title,
  subtitle,
  index,
}: InsightCardProps) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="flex flex-col gap-4 md:flex-row"
  >
    <Image
      src={imgUrl}
      alt={title}
      className="h-[250px] w-full rounded-[32px] object-cover md:w-[270px]"
      width={250}
      height={250}
    />
    <div className="flex w-full items-center justify-between">
      <div className="flex max-w-[650px] flex-1 flex-col md:ml-[62px]">
        <h4 className="text-[26px] font-normal text-white lg:text-[42px]">
          {title}
        </h4>
        <p className="mt-4 text-[14px] font-normal text-secondary-white lg:text-[20px]">
          {subtitle}
        </p>
      </div>
      <div className="hidden h-[100px] w-[100px] items-center justify-center rounded-full border border-white bg-transparent lg:flex">
        <Image
          src="/arrow.svg"
          alt="arrow"
          className="h-[40%] w-[40%] object-contain"
          width={30}
          height={25}
        />
      </div>
    </div>
  </motion.div>
);
