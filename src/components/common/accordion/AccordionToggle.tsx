import FeatherIcon from "feather-icons-react";
import { motion } from "framer-motion";

const variants = {
  show: { rotate: 45 },

  shelter: { rotate: 0 },
};

export const AccordionMotionToggle = ({
  size = 24,
  isOpen,
}: {
  size?: number;
  isOpen: boolean;
}) => {
  return (
    <motion.div
      style={{ width: size, height: size }}
      variants={variants}
      animate={isOpen ? "show" : "shelter"}
      transition={{ duration: 0.2 }}
    >
      <FeatherIcon icon="plus" size={size} />
    </motion.div>
  );
};
