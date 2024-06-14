import { motion } from "framer-motion";
import FeatherIcon from "feather-icons-react";

const variants = {
  show: { rotate: 45 },
  hidden: { rotate: 0 },
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
      animate={isOpen ? "show" : "hidden"}
      transition={{ duration: 0.2 }}
    >
      <FeatherIcon icon="plus" size={size} />
    </motion.div>
  );
};
