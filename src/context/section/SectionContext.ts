import { createContext } from "react";

type SectionContextType = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

export const SectionContext = createContext<SectionContextType | undefined>(
  undefined
);
