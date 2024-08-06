import { motion } from 'framer-motion';

import { sectionData, type SectionIdFormInput } from '@/constants';

import s from './NavigationSection.module.scss';

interface NavigationSectionProps {
  scrollToSection: (idSection: SectionIdFormInput) => void;
}

const listVariant = {
  initial: {},
  enter: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariant = {
  initial: { opacity: 0, x: -20 },
  enter: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
  exit: { opacity: 0, x: 20, transition: { duration: 0.5 } },
};

export const NavigationSection = ({
  scrollToSection,
}: NavigationSectionProps) => {
  return (
    <motion.nav
      initial="initial"
      animate="enter"
      exit="exit"
      className={s.root}
    >
      <h5>Быстрая навигация</h5>
      <motion.ul variants={listVariant} className={s.list}>
        {Object.values(sectionData).map((section, i) => (
          <motion.li
            key={i}
            variants={itemVariant}
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
