import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { navLinks } from "@/constants";

import { NavbarListItem } from "../NavbarListItem";

import s from "./BurgerMenu.module.scss";

const navigationVariants = {
  closed: {
    opacity: 0,
    y: "-100vh",
    transition: {
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

interface BurgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, onClose }) => {
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
          <motion.ul className={s.navLinks}>
            {navLinks.map((link) => (
              <NavbarListItem key={link.label} {...link} onClick={onClose} />
            ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
