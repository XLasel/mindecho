import { motion } from 'framer-motion';

import { sectionData, type SectionIdFormInput } from '@/constants';

import s from './NavigationSection.module.scss';

interface NavigationSectionProps {
  scrollToSection: (idSection: SectionIdFormInput) => void;
}

const itemAnimate = {
  initial: { opacity: 0, x: 0.5 },
  enter: (i: number) => ({
    opacity: 1,
    x: 0.4,
    transition: { delay: 0.3 + i * 0.1 },
  }),
  exit: { opacity: 0 },
};

export const NavigationSection = ({
  scrollToSection,
}: NavigationSectionProps) => {
  return (
    <motion.nav className={s.root}>
      <h5>Быстрая навигация</h5>
      <motion.ul className={s.list}>
        {Object.values(sectionData).map((section, i) => (
          <motion.li
            key={i}
            variants={itemAnimate}
            custom={i}
            initial="initial"
            animate="enter"
            exit="exit"
            className={s.item}
            onClick={() => scrollToSection(section.idFormInput)}
          >
            {section.title}
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};
