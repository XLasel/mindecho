import { motion } from 'framer-motion';

import { aimationScaleDown } from '../anim';
import { SectionContent, SectionTitle, SectionWrapper } from '../sectionLayout';

import s from './FeaturesSection.module.scss';

const cards = [
  {
    title: 'Освобождение от\xa0негативных мыслей',
    text: 'Записывайте свои мысли и\xa0анализируйте их\xa0в\xa0формате ведения дневника.',
  },
  {
    title: 'Осознание и\xa0понимание',
    text: 'Учитесь распознавать и\xa0корректировать когнитивные искажения, которые могут влиять на\xa0ваше эмоциональное состояние.',
  },
  {
    title: 'Прогресс и\xa0уверенность',
    text: 'Используйте встроенные инструменты для анализа своих записей и\xa0наблюдайте за\xa0своим прогрессом.',
  },
];

export const FeaturesSection = () => (
  <SectionWrapper>
    <SectionTitle>MindEcho&nbsp;&mdash; это:</SectionTitle>
    <SectionContent className={s.cards}>
      {cards.map((card, index) => (
        <motion.div variants={aimationScaleDown} key={index} className={s.card}>
          <h3>{card.title}</h3>
          <p className={s.cardText}>{card.text}</p>
        </motion.div>
      ))}
    </SectionContent>
  </SectionWrapper>
);
