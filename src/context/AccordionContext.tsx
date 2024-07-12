import { createContext, useContext, useState } from "react";

interface AccordionContextProps {
  isOpen: boolean;
  toggle: () => void;
}

const AccordionContext = createContext<AccordionContextProps | undefined>(
  undefined,
);

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

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(
      "useAccordionContext must be used within an AccordionProvider",
    );
  }
  return context;
};
