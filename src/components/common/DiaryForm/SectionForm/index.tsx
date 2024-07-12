import React, { forwardRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

import { type NameSectionProps } from "@/constants";
import { useSectionContext } from "@/context/SectionContext";

import s from "./SectionForm.module.scss";

interface SectionFormProps extends React.HTMLAttributes<HTMLElement> {
  section: NameSectionProps;
  description: JSX.Element | JSX.Element[];
  children: JSX.Element | JSX.Element[];
}

export const SectionForm = forwardRef<HTMLElement, SectionFormProps>(
  ({ section, description, children, ...props }, ref) => {
    const { setActiveSection } = useSectionContext();
    const { scrollYProgress } = useScroll({
      target: ref,
    });
    // const { scrollY } = useScroll();

    useMotionValueEvent(scrollYProgress, "change", (value) => {
      // console.log(`prevent ${section.idFormInput} ${value}`);

      if (value > 0 && value < 1) {
        setActiveSection(section.idFormInput);
        // console.log(`${section.idFormInput} ${value}`);
      }
    });
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
