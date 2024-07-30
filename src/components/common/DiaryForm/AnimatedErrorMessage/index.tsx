import { AnimatePresence, motion } from 'framer-motion';

import s from './AnimatedErrorMessage.module.scss';

const containerVariants = {
  hidden: {
    height: 0,
    transition: {
      when: 'afterChildren',
    },
  },
  visible: {
    height: 'auto',
    transition: {
      when: 'beforeChildren',
    },
  },
};

const messageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const AnimatedErrorMessage = ({
  message,
}: {
  message: string | undefined;
}) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={containerVariants}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={s.root}
        >
          <motion.p
            variants={messageVariants}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={s.error}
          >
            {message}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
