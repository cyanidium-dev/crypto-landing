import { IconProps } from "@/types/iconProps";

export default function BurgerMenuIcon({ className }: IconProps) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="burger menu icon"
      className={className}
    >
      <path
        d="M2 7H29M2 16H29M2 25H29"
        stroke="#FEF4FF"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
