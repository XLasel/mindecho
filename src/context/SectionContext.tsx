import { createContext, useState, ReactNode, useContext } from "react";

export type SectionContextType = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export const SectionProvider = ({ children }: { children: ReactNode }) => {
  const [activeSection, setActiveSection] = useState("");

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSectionContext = () => {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error("useSectionContext must be used within a SectionProvider");
  }
  return context;
};
