import { createRef, useEffect, useRef } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useAppSelector } from "@/redux/hook";

import { Container } from "@/components/layout/Container";
import { NoteWrapper } from "@/components/common/NoteWrapper";
import { DiaryForm } from "@/components/common/DiaryForm";
import { NavigationSection } from "./NavigationSection";

import { useMediaQueries } from "@/hook/useMediaQueries";
import { SectionProvider } from "@/context/SectionContext";
import { selectAllNotes } from "@/redux/selectors";
import { sectionData } from "@/constants";

import s from "./NoteEditorLayout.module.scss";

export type SectionsRefs = {
  [key: string]: React.RefObject<HTMLElement>;
};

export const NoteEditorLayout = () => {
  const { id } = useParams();
  const notes = useAppSelector(selectAllNotes);
  const note = id ? notes.find((note) => note.id === id) : null;
  const sectionsRefs = useRef<SectionsRefs>({});
  const { isTablet } = useMediaQueries();

  useEffect(() => {
    Object.values(sectionData).forEach((section) => {
      sectionsRefs.current[section.idFormInput] = createRef<HTMLElement>();
    });
  }, []);

  if (id && !note) {
    return <Navigate to="/diary/add" />;
  }

  const scrollToSection = (id: string) => {
    const ref = sectionsRefs.current[id];
    if (ref && ref.current) {
      const elementTop =
        ref.current.getBoundingClientRect().top + window.scrollY;
      const viewportHeight = window.innerHeight;
      const offset = 10;
      const scrollToPosition = elementTop - viewportHeight / 2 + offset;

      window.scrollTo({
        top: scrollToPosition,
        behavior: "smooth",
      });
    } else {
      console.error(`Ref for section ${id} is not available`);
    }
  };

  return (
    <Container>
      <SectionProvider>
        <div className={s.root}>
          {!isTablet && (
            <aside className={s.aside}>
              <NavigationSection scrollToSection={scrollToSection} />
            </aside>
          )}
          <NoteWrapper>
            <DiaryForm noteToEdit={note} sectionsRefs={sectionsRefs.current} />
          </NoteWrapper>
        </div>
      </SectionProvider>
    </Container>
  );
};
