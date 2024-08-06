import React from 'react';
import { motion } from 'framer-motion';

import { Container, type ContainerProps } from '@/components/layout/Container';
import { cn, hasMultipleChildren } from '@/utils';

import { baseAimationWithChildren } from '../../anim';

import s from './SectionWrapper.module.scss';

interface SectionWrapperProps
  extends React.ComponentProps<'section'>,
    ContainerProps {
  children: JSX.Element | JSX.Element[];
  width?: ContainerProps['width'];
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
          variants={
            hasMultipleChildren(children) ? baseAimationWithChildren : undefined
          }
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className={cn(s.inner, innerClassName)}
        >
          {children}
        </motion.div>
      </Container>
    </section>
  );
});

SectionWrapper.displayName = 'SectionWrapper';
