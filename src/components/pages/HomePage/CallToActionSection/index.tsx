import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Button } from '@/components/common/Button';
import { IMAGE, ROUTES } from '@/constants';

import { aimationButton, aimationRotate, aimationSlideUp } from '../anim';
import { SectionContent, SectionTitle, SectionWrapper } from '../sectionLayout';

import s from './CallToActionSection.module.scss';

export const CallToActionSection = () => {
  const navigate = useNavigate();

  return (
    <SectionWrapper innerClassName={s.root}>
      <SectionContent sizeText="big" className={s.offer}>
        <motion.div variants={aimationRotate} className={s.image}>
          <img src={IMAGE.invitation} />
        </motion.div>
        <SectionTitle className={s.title}>
          Готовы начать свой путь к&nbsp;лучшему самочувствию?
        </SectionTitle>
        <motion.div variants={aimationSlideUp} className={s.text}>
          <p>
            Присоединяйтесь к MindEcho и&nbsp;сделайте первую запись
            уже&nbsp;сегодня!
          </p>
        </motion.div>
        <motion.div
          className={s.button}
          variants={aimationButton}
          whileTap={{ scale: 0.99 }}
        >
          <Button
            size="lg"
            variant="secondary"
            onClick={() => navigate(ROUTES.DIARY_ADD)}
          >
            Cделать запись
          </Button>
        </motion.div>
      </SectionContent>
    </SectionWrapper>
  );
};
