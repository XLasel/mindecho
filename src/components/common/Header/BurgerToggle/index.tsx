import React from 'react';
import { motion } from 'framer-motion';

import s from './BurgerToggle.module.scss';

const lineOneVariants = {
  initial: {
    rotate: '0deg',
    transition: {
      ease: 'easeOut',
    },
  },
  animate: {
    y: '3px',
    rotate: '45deg',
    transition: {
      ease: 'easeOut',
    },
  },
};
const lineTwoVariants = {
  initial: { rotate: '0deg' },
  animate: {
    y: '-3px',
    rotate: '-45deg',
    transition: {
      ease: 'easeOut',
    },
  },
};

interface BurgerToggleProps {
  isOpen: boolean;
  handleBurger: () => void;
}

export const BurgerToggle: React.FC<BurgerToggleProps> = ({
  isOpen,
  handleBurger,
}) => (
  <div className={s.root} onClick={handleBurger}>
    <motion.div
      className={s.wrapper}
      initial="initial"
      animate={isOpen ? 'animate' : 'initial'}
    >
      <motion.div variants={lineOneVariants} className={s.line}></motion.div>
      <motion.div variants={lineTwoVariants} className={s.line}></motion.div>
    </motion.div>
  </div>
);
