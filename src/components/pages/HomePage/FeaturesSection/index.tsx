import { motion, useScroll, useTransform } from "framer-motion";

import { SectionContent, SectionTitle, SectionWrapper } from "../sectionLayout";

import { aimationScaleDown } from "../anim";

import s from "./FeaturesSection.module.scss";
import { useRef } from "react";

const cards = [
  {
    title: "Освобождение от\xa0негативных мыслей",
    text: "Записывайте свои мысли и\xa0анализируйте их\xa0в\xa0формате ведения дневника.",
  },
  {
    title: "Осознание и\xa0понимание",
    text: "Учитесь распознавать и\xa0корректировать когнитивные искажения, которые могут влиять на\xa0ваше эмоциональное состояние.",
  },
  {
    title: "Прогресс и\xa0уверенность",
    text: "Используйте встроенные инструменты для анализа своих записей и\xa0наблюдайте за\xa0своим прогрессом.",
  },
];

export const FeaturesSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <SectionWrapper className={s.root}>
      <SectionTitle>MindEcho&nbsp;&mdash; это:</SectionTitle>
      <SectionContent className={s.cards}>
        {/* <motion.div ref={targetRef} style={{ x }} className={s.cards}> */}
        {cards.map((card, index) => (
          <motion.div
            variants={aimationScaleDown}
            key={index}
            className={s.card}
          >
            <h3>{card.title}</h3>
            <p className={s.cardText}>{card.text}</p>
          </motion.div>
        ))}
        {/* </motion.div> */}
      </SectionContent>
    </SectionWrapper>
  );
};
