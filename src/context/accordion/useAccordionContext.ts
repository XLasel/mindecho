import { useContext } from "react";

import { AccordionContext } from "./AccordionContext";

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(
      "useAccordionContext must be used within an AccordionProvider"
    );
  }
  return context;
};
