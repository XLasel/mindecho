import { motion } from 'framer-motion';

import { IMAGE } from '@/constants';

import { aimationSlideUp } from '../anim';
import { SectionContent, SectionTitle, SectionWrapper } from '../sectionLayout';

import s from './BenefitsSection.module.scss';

const benefitsData = [
  {
    img: IMAGE.bScientificApproach,
    title: 'Научный подход',
    description:
      'Наши методы основаны на\xa0доказанной эффективности когнитивно-поведенческой терапии.',
  },
  {
    img: IMAGE.bAvailability,
    title: 'Удобство и\xa0доступность',
    description:
      'Используйте MindEcho в\xa0любое время и\xa0в\xa0любом месте\xa0\u2014 на\xa0компьютере, планшете или смартфоне.',
  },
  {
    img: IMAGE.bSafety,
    title: 'Безопасность и\xa0конфиденциальность',
    description:
      'Мы\xa0заботимся о\xa0вашей приватности и\xa0безопасности данных.',
  },
  {
    img: IMAGE.bSupport,
    title: 'Поддержка сообщества',
    description:
      'Присоединяйтесь к\xa0сообществу пользователей, делитесь своими успехами и\xa0получайте поддержку.',
  },
];

export const BenefitsSection = () => (
  <SectionWrapper>
    <SectionTitle>Почему стоит выбрать MindEcho?</SectionTitle>
    <SectionContent direction="default" className={s.benefits}>
      {benefitsData.map((benefit, i) => (
        <motion.div key={i} className={s.benefit} variants={aimationSlideUp}>
          <img className={s.img} src={benefit.img} />
          <div className={s.text}>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        </motion.div>
      ))}
    </SectionContent>
  </SectionWrapper>
);
