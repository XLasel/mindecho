import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { Button } from "@/components/common/Button";
import IMAGE from "@/images";

import { aimationButton, aimationSlideLeft, aimationSlideUp } from "../anim";
import { SectionContent, SectionWrapper } from "../sectionLayout";

import s from "./HeroSection.module.scss";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <SectionWrapper width="full" innerClassName={s.root}>
      <SectionContent className={s.content}>
        <motion.div variants={aimationSlideLeft} className={s.image}>
          <img src={IMAGE.welcomeIllustration} />
        </motion.div>
        <motion.h1 className={s.title} variants={aimationSlideLeft}>
          <span className={s.logo}>
            Mind<span>Echo</span>
          </span>
          &nbsp;&mdash; личный дневник автоматических мыслей
        </motion.h1>
        <motion.div variants={aimationSlideUp} className={s.subtitle}>
          <p>
            Преобразуем мысли и&nbsp;улучшаем качество жизни с&nbsp;помощью
            методов когнитивно-поведенческой терапии
          </p>
        </motion.div>
        <motion.div
          className={s.button}
          variants={aimationButton}
          whileTap={{ scale: 0.9 }}
        >
          <Button size="lg" onClick={() => navigate("/diary")}>
            Начнём
          </Button>
        </motion.div>
      </SectionContent>
    </SectionWrapper>
  );
};
