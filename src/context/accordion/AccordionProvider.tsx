import { useState } from "react";

import { AccordionContext } from "./AccordionContext";

interface AccordionProviderProps {
  children: React.ReactNode;
  isOpen?: boolean;
  toggle?: () => void;
}

export const AccordionProvider: React.FC<AccordionProviderProps> = ({
  children,
  isOpen: externalIsOpen,
  toggle: externalToggle,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);

  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const toggle = externalToggle || (() => setInternalIsOpen(!internalIsOpen));

  return (
    <AccordionContext.Provider value={{ isOpen, toggle }}>
      {children}
    </AccordionContext.Provider>
  );
};
