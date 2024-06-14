import React from "react";
import s from "./Container.module.scss";
import { cva, type VariantProps } from "class-variance-authority";

interface ContainerProps extends VariantProps<typeof containerVariants> {
  children: React.ReactNode;
}
const containerVariants = cva(s.root, {
  variants: {
    width: {
      default: s.default,
      full: s.full,
      small: s.small,
    },
  },
  defaultVariants: {
    width: "default",
  },
});

export const Container: React.FC<ContainerProps> = ({ children, width }) => {
  return <div className={containerVariants({ width })}>{children}</div>;
};
