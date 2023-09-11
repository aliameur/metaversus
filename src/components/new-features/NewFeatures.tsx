import Image from "next/image";
import styles from "@/config/styles";

interface NewFeaturesProps {
  imgUrl: string;
  title: string;
  subtitle: string;
}

export const NewFeatures = ({ imgUrl, title, subtitle }: NewFeaturesProps) => (
  <div className="flex min-w-[210px] flex-1 flex-col sm:max-w-[250px]">
    <div
      className={`${styles.flexCenter} h-[70px] w-[70px] rounded-3xl bg-[#323f5d]`}
    >
      <Image
        src={imgUrl}
        alt="icon"
        width={35}
        height={35}
        className="h-1/2 w-1/2 object-contain"
      />
    </div>
    <h1 className="bold mt-[26px] text-[24px] leading-[30px] text-white">
      Title {title}
    </h1>
    <p className="mt-4 flex-1 text-[18px] font-normal leading-[32px] text-[#b0b0b0]">
      {subtitle}
    </p>
  </div>
);
