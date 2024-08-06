import { motion } from 'framer-motion';

import { aimationSlideUp } from '../anim';
import { SectionContent, SectionTitle, SectionWrapper } from '../sectionLayout';

export const AboutCBT = () => (
  <SectionWrapper>
    <SectionTitle>Что такое когнитивно-поведенческая терапия?</SectionTitle>
    <SectionContent sizeText="big">
      <motion.p variants={aimationSlideUp}>
        <strong>Когнитивно-поведенческая терапия (КПТ)</strong>&nbsp;&mdash; это
        научно обоснованный метод психотерапии, который помогает людям осознать
        и&nbsp;изменить негативные мыслительные шаблоны.
      </motion.p>
      <motion.p variants={aimationSlideUp}>
        <strong>КПТ</strong> фокусируется на&nbsp;текущих проблемах
        и&nbsp;помогает развивать навыки для управления ими.
      </motion.p>
    </SectionContent>
  </SectionWrapper>
);
