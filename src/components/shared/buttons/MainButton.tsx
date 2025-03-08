import Image from "next/image";

interface MainButtonProps {
  children: React.ReactNode;
}

export default function MainButton({ children }: MainButtonProps) {
  return (
    <button
      className="relative overflow-hidden flex justify-center items-center w-full h-16 bg-buttonBorderGradient p-[1px] rounded-[36px]
      active:scale-95 focus-visible:brightness-[140%] transition duration-300 ease-out outline-none group"
    >
      <span className="flex justify-center items-center w-full h-full rounded-[36px] bg-buttonBgGradient text-16med lg:text-20med">
        {children}
      </span>
      <Image
        src="/images/icons/telegram.svg"
        alt="telegram icon"
        width={48}
        height={48}
        className="absolute top-2 right-3"
      />
      <span
        className="absolute top-0 left-[-150%] w-[100%] h-full bg-gradient-to-r from-white/20 via-[#12DDF3]/30 to-white/20 opacity-70 
      skew-x-[-40deg] group-hover:left-[120%] transition-all duration-[800ms] ease-in-out"
      />
    </button>
  );
}
