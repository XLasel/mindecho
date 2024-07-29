import { createContext } from 'react';

interface AccordionContextProps {
  isOpen: boolean;
  toggle: () => void;
}

export const AccordionContext = createContext<
  AccordionContextProps | undefined
>(undefined);
