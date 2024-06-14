import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";

import { AccordionProvider } from "../AccordionProvider";

import s from "./Accordion.module.scss";

const accordionVariants = cva(s.root, {
  variants: {
    style: {
      container: s.container,
      flow: s.flow,
    },
  },
  defaultVariants: {
    style: "container",
  },
});

interface AccordionProps extends VariantProps<typeof accordionVariants> {
  className?: string;
  children: React.ReactNode;
  isOpen?: boolean;
  toggle?: () => void;
}

export const Accordion: React.FC<AccordionProps> = ({
  style,
  className,
  children,
  isOpen,
  toggle,
}) => {
  return (
    <div className={clsx(accordionVariants({ style, className }))}>
      <AccordionProvider isOpen={isOpen} toggle={toggle}>
        {children}
      </AccordionProvider>
    </div>
  );
};
