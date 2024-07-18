import { AboutAutomaticThoughts } from "./AboutAutomaticThoughts";
import { AboutCBT } from "./AboutCBT";
import { BenefitsSection } from "./BenefitsSection";
import { CallToActionSection } from "./CallToActionSection";
import { FAQSection } from "./FAQSection";
import { FeaturesSection } from "./FeaturesSection";
import { HeroSection } from "./HeroSection";
import { IllustrationSection } from "./IllustrationSection";

import s from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <div className={s.root}>
      <HeroSection />
      <AboutCBT />
      <IllustrationSection />
      <AboutAutomaticThoughts />
      <FeaturesSection />
      <BenefitsSection />
      <FAQSection />
      <CallToActionSection />
    </div>
  );
};
