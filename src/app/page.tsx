import After from "@/components/homePage/after/After";
import Before from "@/components/homePage/before/Before";
import Certificate from "@/components/homePage/certificate/Certificate";
import CtaSignUp from "@/components/homePage/ctaSignUp/CtaSignUp";
import CtaWebinar from "@/components/homePage/ctaWebinar/CtaWebinar";
import Hero from "@/components/homePage/hero/Hero";
import Reviews from "@/components/homePage/reviews/Reviews";
import TradingBenefits from "@/components/homePage/tradingBenefits/TradingBenefits";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Before />
      <After />
      <CtaSignUp />
      <TradingBenefits />
      <Certificate />
      <Reviews />
      <CtaWebinar />
    </>
  );
}
