import { motion,MotionProps } from "framer-motion";

import { aimationSlideLeft } from "../../anim";

type SectionTitleProps = MotionProps &
  React.HTMLAttributes<HTMLHeadingElement> & {
    children: React.ReactNode;
  };

export const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  ...props
}) => {
  return (
    <motion.h2 variants={aimationSlideLeft} {...props}>
      {children}
    </motion.h2>
  );
};
