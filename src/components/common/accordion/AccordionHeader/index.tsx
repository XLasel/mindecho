import React from "react";

import { useAccordionContext } from "@/context/accordion";

import { AccordionMotionToggle } from "../AccordionToggle";

import s from "./AccordionHeader.module.scss";

interface AccordionHeaderProps {
  children: React.ReactNode;
}

export const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  children,
}) => {
  const { isOpen, toggle } = useAccordionContext();

  return (
    <div onClick={toggle} className={s.root}>
      {typeof children === "string" ? (
        <>
          <span>{children}</span>
          <AccordionMotionToggle size={28} isOpen={isOpen} />
        </>
      ) : (
        <>
          <AccordionMotionToggle size={28} isOpen={isOpen} />
          {children}
        </>
      )}
    </div>
  );
};
