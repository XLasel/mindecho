import { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import s from './AnimatedCollapse.module.scss';

interface AnimatedCollapseProps {
  isOpen: boolean;
  className?: string;
  children: ReactNode;
}

export const AnimatedCollapse: React.FC<AnimatedCollapseProps> = ({
  isOpen,
  children,
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        className={s.root}
        initial={{ height: 0, opacity: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className={s.inner}>{children}</div>
      </motion.div>
    )}
  </AnimatePresence>
);
