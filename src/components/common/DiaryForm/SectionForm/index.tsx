import React, { forwardRef } from 'react';

import { type NameSectionType } from '@/constants/types';

import s from './SectionForm.module.scss';

interface SectionFormProps extends React.HTMLAttributes<HTMLElement> {
  section: NameSectionType;
  description: JSX.Element | JSX.Element[];
  children: JSX.Element | JSX.Element[];
}

export const SectionForm = forwardRef<HTMLElement, SectionFormProps>(
  ({ section, description, children, ...props }, ref) => {
    return (
      <section
        className={s.root}
        aria-labelledby={`${section.idFormInput}-label`}
        aria-describedby={`${section.idFormInput}-description`}
        ref={ref}
        {...props}
      >
        <h3 id={`${section.idFormInput}-label`}>{section.title}</h3>
        <div
          id={`${section.idFormInput}-description`}
          className={s.description}
        >
          {description}
        </div>
        {children}
      </section>
    );
  }
);

SectionForm.displayName = 'SectionForm';
