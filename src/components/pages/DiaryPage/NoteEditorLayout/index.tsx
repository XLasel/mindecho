import { useParams } from "react-router-dom";
import { useAppSelector } from "@/redux/hook";

import { NoteWrapper } from "@/components/common/NoteWrapper";
import { DiaryForm } from "@/components/common/DiaryForm";

import { selectAllNotes } from "@/redux/selectors";

import s from "./NoteEditorLayout.module.scss";
import { NoteActions } from "@/components/common/NoteActions";
import {
  SectionContext,
  useSectionContextValues,
} from "@/context/useSectionContextValues";
import { NavigationSection } from "./NavigationSection";
import { sectionData } from "@/constants";
import { createRef, useEffect, useRef } from "react";

export const NoteEditorLayout = () => {
  const { id } = useParams();
  const notes = useAppSelector(selectAllNotes);
  // const note = notes.find((note) => note.id === id);
  const note = id ? notes.find((note) => note.id === id) : null;

  const { values } = useSectionContextValues();
  const sectionsRefs = useRef<{ [key: string]: React.RefObject<HTMLElement> }>(
    {}
  );

  // Инициализация рефов для всех секций
  useEffect(() => {
    Object.values(sectionData).forEach((section) => {
      sectionsRefs.current[section.idFormInput] = createRef<HTMLElement>();
    });
  }, []);

  const scrollToSection = (id: string) => {
    // const ref = sectionsRefs.current[id];
    // if (ref && ref.current) {
    //   ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    // }
    const ref = sectionsRefs.current[id];
    console.log(ref);
    if (ref && ref.current) {
      const elementTop =
        ref.current.getBoundingClientRect().top + window.scrollY;
      const viewportHeight = window.innerHeight;
      const offset = 20; // Отступ от края экрана
      const scrollToPosition = elementTop - viewportHeight / 2 + offset;

      window.scrollTo({
        top: scrollToPosition,
        behavior: "smooth",
      });
      // const topOffset =
      //   ref.current.getBoundingClientRect().top + window.scrollY;
      // const offset = window.innerWidth < 768 ? 100 : 200;
      // const scrollPosition = topOffset - offset;

      // window.scrollTo({
      //   top: scrollPosition,
      //   behavior: "smooth",
      // });
    } else {
      console.error(`Ref for section ${id} is not available`);
    }
  };

  return (
    <NoteWrapper>
      <SectionContext.Provider value={values}>
        <div className={s.root}>
          <aside className={s.aside}>
            <NavigationSection scrollToSection={scrollToSection} />
          </aside>
          <DiaryForm noteToEdit={note} sectionsRefs={sectionsRefs} />
        </div>
      </SectionContext.Provider>
    </NoteWrapper>
  );
};
