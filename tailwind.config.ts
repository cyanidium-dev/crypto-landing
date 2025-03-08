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
        mob: "375px",
        mobxl: "514px",
        tabxs: "726px",
        tab: "768px",
        tabxl: "1024px",
        laptop: "1280px",
        desk: "1520px",
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
      fontSize: {
        "12semi": ["12px", { lineHeight: "20px", fontWeight: "600" }],
        "12bold": ["12px", { lineHeight: "14.41px", fontWeight: "700" }],
        "14light": ["14px", { lineHeight: "16.44px", fontWeight: "300" }],
        "14semi": ["14px", { lineHeight: "20px", fontWeight: "600" }],
        "14bold": ["14px", { lineHeight: "16.81px", fontWeight: "700" }],
        "16light": ["16px", { lineHeight: "18.78px", fontWeight: "300" }],
        "16reg": ["16px", { lineHeight: "18.78px", fontWeight: "400" }],
        "16med": ["16px", { lineHeight: "18.78px", fontWeight: "500" }],
        "16bold": ["16px", { lineHeight: "19.22px", fontWeight: "700" }],
        "18light": ["18px", { lineHeight: "21.13px", fontWeight: "300" }],
        "18bold": ["18px", { lineHeight: "21.62px", fontWeight: "700" }],
        "20light": ["20px", { lineHeight: "23.48px", fontWeight: "300" }],
        "20reg": ["20px", { lineHeight: "24.38px", fontWeight: "400" }],
        "20med": ["20px", { lineHeight: "24.38px", fontWeight: "500" }],
        "20bold": ["20px", { lineHeight: "24.02px", fontWeight: "700" }],
        "24bold": ["24px", { lineHeight: "28.82px", fontWeight: "700" }],
        "32bold": ["32px", { lineHeight: "38.43px", fontWeight: "700" }],
        "36bold": ["36px", { lineHeight: "43.24px", fontWeight: "700" }],
        "40bold": ["40px", { lineHeight: "48.04px", fontWeight: "700" }],
        "58bold": ["58px", { lineHeight: "69.66px", fontWeight: "700" }],
        "64bold": ["64px", { lineHeight: "76.86px", fontWeight: "700" }],
        "128bold": ["128px", { lineHeight: "153.73px", fontWeight: "700" }],
      },
      colors: {
        black: "#060113",
        white: "#FEF4FF",
        pink: "#EF1A5B",
        purple: "#4B41FF",
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
        redLightYellowGradient:
          "linear-gradient(95.46deg, #F31260 -78.11%, #FFEA4D 92.68%)",
        signUpTextGradient: "linear-gradient(90deg, #FF3995 0%, #E7FF2E 100%)",
        afterSectionTopGradient:
          "linear-gradient(175.41deg, #060113 7.06%, rgba(6, 1, 19, 0) 109.54%)",
        bottomGradient:
          "linear-gradient(to top, #060113 22.36%, rgba(6, 1, 19, 0) 113.22%)",
        sliderGradient:
          "linear-gradient(to right, rgba(0, 0, 0, 0) -35.77%, #000000 64.42%)",
        buttonBgGradient:
          "linear-gradient(94.6deg, #12DDF3 3.73%, #000FB3 142.88%)",
        buttonBorderGradient:
          "linear-gradient(90.44deg, #075ACA 0.38%, #12DAF2 103.92%)",
        headerButtonGradient:
          "linear-gradient(90.44deg, #DBEAFF 0.38%, #12DAF2 103.92%)",
        heroTextGradient:
          "linear-gradient(90.44deg, #075ACA 0.38%, #12DAF2 103.92%)",
        benefitsTextGradient:
          "linear-gradient(90.44deg, #E2EFFF 0.38%, #12DAF2 103.92%)",
        certificateTextGradient:
          "linear-gradient(90.73deg, #E0EDFF -23.4%, #12DAF2 103.99%)",
        ctaWebinarTextGradient:
          "linear-gradient(90.44deg, #D9E9FF 0.38%, #12DAF2 103.92%)",
        ctaSignUpTextGradient:
          "linear-gradient(90.44deg, #C5DEFF 0.38%, #12DAF2 103.92%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
