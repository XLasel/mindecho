import React from "react";
import { motion } from "framer-motion";

import { Container, ContainerProps } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

import { baseAimation } from "../../anim";

import s from "./SectionWrapper.module.scss";

interface SectionWrapperProps
  extends React.ComponentProps<"section">,
    ContainerProps {
  children: JSX.Element | JSX.Element[];
  innerClassName?: string;
}

export const SectionWrapper = React.forwardRef<
  HTMLElement,
  SectionWrapperProps
>(({ children, width, innerClassName, ...props }, ref) => {
  return (
    <section className={s.root} ref={ref} {...props}>
      <Container width={width}>
        <motion.div
          variants={baseAimation}
          initial="hidden"
          whileInView="visible"
          className={cn(s.inner, innerClassName)}
        >
          {children}
        </motion.div>
      </Container>
    </section>
  );
});
