import { motion } from 'framer-motion';

import { aimationSlideUp } from '../anim';
import { SectionContent, SectionTitle, SectionWrapper } from '../sectionLayout';

export const AboutAutomaticThoughts = () => (
  <SectionWrapper>
    <SectionTitle>Что такое автоматические мысли?</SectionTitle>
    <SectionContent sizeText="big">
      <motion.p variants={aimationSlideUp}>
        <strong>Автоматические мысли</strong>&nbsp;&mdash; это спонтанные,
        непроизвольные мысли, которые возникают в&nbsp;ответ на&nbsp;различные
        события и&nbsp;ситуации.
      </motion.p>
      <motion.p variants={aimationSlideUp}>
        Они могут быть негативными и&nbsp;приводить к&nbsp;эмоциям, таким как
        тревога, грусть или гнев.
      </motion.p>
      <motion.p variants={aimationSlideUp}>
        <strong>MindEcho</strong> создан, чтобы помочь вам идентифицировать
        и&nbsp;анализировать эти мысли.
      </motion.p>
    </SectionContent>
  </SectionWrapper>
);
