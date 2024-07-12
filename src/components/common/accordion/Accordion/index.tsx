import React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import { AccordionProvider } from "@/context/AccordionContext";

import s from "./Accordion.module.scss";

const accordionVariants = cva(s.root, {
  variants: {
    cardStyle: {
      container: s.container,
      flow: s.flow,
    },
  },
  defaultVariants: {
    cardStyle: "container",
  },
});

interface AccordionProps extends VariantProps<typeof accordionVariants> {
  className?: string;
  children: React.ReactNode;
  isOpen?: boolean;
  toggle?: () => void;
}

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ cardStyle, className, children, isOpen, toggle, ...props }, ref) => {
    return (
      <div
        className={cn(accordionVariants({ cardStyle, className }))}
        ref={ref}
        {...props}
      >
        <AccordionProvider isOpen={isOpen} toggle={toggle}>
          {children}
        </AccordionProvider>
      </div>
    );
  }
);

Accordion.displayName = "Accordion";
