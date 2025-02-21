import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        tab: "768px",
        laptop: "1280px",
        deskxl: "1920px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "22px",
          md: "30px",
          xl: "90px",
        },
      },
      fontFamily: {
        raleway: ["var(--font-raleway)"],
        michelin: ["var(--font-michelin)"],
      },
      colors: {
        black: "#060113",
        white: "#FEF4FF",
      },
      backgroundImage: {
        caviarGradient:
          "linear-gradient(94.6deg, #F31260 3.73%, #B39E00 142.88%)",
        purpleGradient:
          "linear-gradient(94.6deg, #571EE6 3.73%, #180841 142.88%)",
        pinkGradient:
          "linear-gradient(94.6deg, #F31260 3.73%, #A459FF 142.88%)",
        lightPinkGradient:
          "linear-gradient(91.81deg, #FF3279 1.53%, #9173FF 112.76%)",
        logoGradient:
          "linear-gradient(95.63deg, #F54180 -14.26%, #FFE83B 295.34%)",
        redYellowGradient:
          "linear-gradient(94.6deg, #F54180 3.73%, #FFE204 142.88%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
