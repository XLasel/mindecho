import { createContext, useContext } from "react";

interface AccordionContextProps {
  isOpen: boolean;
  toggle: () => void;
}

export const AccordionContext = createContext<
  AccordionContextProps | undefined
>(undefined);

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(
      "useAccordionContext must be used within an AccordionProvider"
    );
  }
  return context;
};
