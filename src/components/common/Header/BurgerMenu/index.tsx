import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { navLinks } from '@/constants';

import { NavbarListItem } from '../NavbarListItem';

import s from './BurgerMenu.module.scss';

const navigationVariants = {
  closed: {
    opacity: 0,
    y: '-100vh',
    transition: {
      ease: 'easeOut',
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeOut',
    },
  },
};

const linksVariants = {
  closed: {
    opacity: 0,
    transition: {
      ease: 'easeOut',
    },
  },
  open: {
    opacity: 1,
    transition: {
      ease: 'easeOut',
      staggerChildren: 0.1,
      delayChildren: 0.4,
    },
  },
};

const itemLinkVariant = {
  closed: {
    opacity: 0,
    transition: {
      ease: 'easeOut',
    },
  },
  open: {
    opacity: 1,
    transition: {
      ease: 'easeOut',
    },
  },
};

interface BurgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, onClose }) => {
  const MotionNavbarListItem = motion(NavbarListItem);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={s.root}
          initial="closed"
          animate="open"
          exit="closed"
          variants={navigationVariants}
        >
          <motion.ul className={s.navLinks} variants={linksVariants}>
            {navLinks.map((link) => (
              <MotionNavbarListItem
                key={link.label}
                variants={itemLinkVariant}
                {...link}
                onClick={onClose}
              />
            ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
