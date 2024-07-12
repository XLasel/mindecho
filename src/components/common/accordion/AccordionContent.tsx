import React from "react";

import { AnimatedCollapse } from "@/components/common/AnimatedCollapse";

import { useAccordionContext } from "@/context/AccordionContext";

interface AccordionContentProps {
  children: React.ReactNode;
}

export const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
}) => {
  const { isOpen } = useAccordionContext();

  return <AnimatedCollapse isOpen={isOpen}>{children}</AnimatedCollapse>;
};
