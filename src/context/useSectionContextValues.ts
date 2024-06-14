import { createContext, useState } from "react";

export type SectionContextType = {
  activeSection: string;
  setActiveSection: (_: string) => void;
};

export const SectionContext = createContext<SectionContextType | undefined>(
  undefined
);

export const useSectionContextValues = () => {
  const [activeSection, setActiveSection] = useState("");

  return {
    values: {
      activeSection,
      setActiveSection,
    },
  };
};
