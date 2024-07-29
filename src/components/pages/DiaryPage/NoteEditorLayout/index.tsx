import { createRef, useEffect, useRef } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { DiaryForm } from '@/components/common/DiaryForm';
import { Container } from '@/components/layout/Container';
import { ContentWrapper } from '@/components/layout/ContentWrapper';
import { ROUTES, sectionData, type SectionIdFormInput } from '@/constants';
import { useMediaQueries } from '@/hook/useMediaQueries';
import { useAppSelector } from '@/redux/hook';
import { selectAllNotes } from '@/redux/selectors';

import { NavigationSection } from './NavigationSection';

import s from './NoteEditorLayout.module.scss';

export type SectionsRefs = {
  [key: SectionIdFormInput]: React.RefObject<HTMLElement>;
};

export const NoteEditorLayout = () => {
  const { id } = useParams();
  const notes = useAppSelector(selectAllNotes);
  const { isTablet } = useMediaQueries();
  const sectionsRefs = useRef<SectionsRefs>({});

  const note = id ? notes.find((noteItem) => noteItem.id === id) : null;

  useEffect(() => {
    Object.values(sectionData).forEach((section) => {
      sectionsRefs.current[section.idFormInput] = createRef<HTMLElement>();
    });
  }, []);

  if (id && !note) {
    return <Navigate to={ROUTES.DIARY_ADD} />;
  }

  const scrollToSection = (idSection: SectionIdFormInput) => {
    const ref = sectionsRefs.current[idSection];

    if (!ref?.current) return;

    const elementTop = ref.current.getBoundingClientRect().top + window.scrollY;
    const viewportHeight = window.innerHeight;
    const offset = 10;
    const scrollToPosition = elementTop - viewportHeight / 2 + offset;

    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth',
    });
  };

  return (
    <Container>
      <div className={s.root}>
        {!isTablet && (
          <aside className={s.aside}>
            <NavigationSection scrollToSection={scrollToSection} />
          </aside>
        )}
        <ContentWrapper>
          <DiaryForm noteToEdit={note} sectionsRefs={sectionsRefs.current} />
        </ContentWrapper>
      </div>
    </Container>
  );
};
