import { HeroSection } from "./HeroSection";
import { AboutCBT } from "./AboutCBT";
import { AboutAutomaticThoughts } from "./AboutAutomaticThoughts";
import { IllustrationSection } from "./IllustrationSection";
import { FeaturesSection } from "./FeaturesSection";
import { BenefitsSection } from "./BenefitsSection";
import { FAQSection } from "./FAQSection";
import { CallToActionSection } from "./CallToActionSection";

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
