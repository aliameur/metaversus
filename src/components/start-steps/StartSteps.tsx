import styles from "@/config/styles";

interface StartStepsProps {
  text: string;
  number: number;
}

export const StartSteps = ({ text, number }: StartStepsProps) => (
  <div
    className={`${styles.flexCenter} flex-row
 `}
  >
    <div
      className={`${styles.flexCenter} h-[70px] w-[70px] rounded-3xl bg-[#323f5d]`}
    >
        <p className='font-bold text-[20px] text-white'>0{number}</p>
    </div>
      <p className='flex-1 ml-[30px] font-normal text-[18px] text-[#b0b0b0] leading-[32px] '>{text}</p>
  </div>
);
