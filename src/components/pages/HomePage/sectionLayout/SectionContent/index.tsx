import { cva,VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

import { aimationSlideUp } from "../../anim";

import s from "./SectionContent.module.scss";

const sectionContentVariants = cva(s.root, {
  variants: {
    direction: {
      default: "",
      row: s.row,
      column: s.column,
    },
    sizeText: {
      default: "",
      big: s.textBig,
    },
  },
  defaultVariants: {
    direction: "column",
    sizeText: "default",
  },
});

export interface SectionContentProps
  extends VariantProps<typeof sectionContentVariants> {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

export const SectionContent: React.FC<SectionContentProps> = ({
  children,
  direction,
  sizeText,
  className,
}) => {
  return (
    <motion.div
      className={cn(sectionContentVariants({ direction, sizeText, className }))}
      variants={aimationSlideUp}
    >
      {children}
    </motion.div>
  );
};
