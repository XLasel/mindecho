import { motion } from 'framer-motion';

import { IMAGE } from '@/constants';

import { aimationScaleDown, aimationSlideLeft } from '../anim';
import { SectionContent, SectionWrapper } from '../sectionLayout';

import s from './IllustrationSection.module.scss';

export const IllustrationSection = () => (
  <SectionWrapper className={s.root}>
    <SectionContent direction="default" className={s.content}>
      <motion.p variants={aimationSlideLeft}>
        Основой КПТ является идея, что наши <em>мысли</em>, <em>эмоции</em>{' '}
        и&nbsp;
        <em>поведение</em> взаимосвязаны, и&nbsp;изменение одного элемента может
        повлиять на&nbsp;другие
      </motion.p>
      <motion.img variants={aimationScaleDown} src={IMAGE.kptDiagram} />
    </SectionContent>
  </SectionWrapper>
);
