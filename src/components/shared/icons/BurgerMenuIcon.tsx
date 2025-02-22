import { IconProps } from "@/types/iconProps";

export default function BurgerMenuIcon({ className }: IconProps) {
  return (
    <svg
      width="31"
      height="22"
      viewBox="0 0 31 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="burger menu icon"
      className={className}
    >
      <path
        d="M2 2H29M2 11H29M2 20H29"
        stroke="#FEF4FF"
        stroke-width="2.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
