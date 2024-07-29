import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import s from './Container.module.scss';

const containerVariants = cva(s.root, {
  variants: {
    width: {
      default: s.default,
      full: s.full,
      small: s.small,
    },
  },
  defaultVariants: {
    width: 'default',
  },
});

export interface ContainerProps extends VariantProps<typeof containerVariants> {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children, width }) => (
  <div className={containerVariants({ width })}>{children}</div>
);
