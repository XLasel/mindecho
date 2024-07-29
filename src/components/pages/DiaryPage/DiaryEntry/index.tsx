import { Link, Navigate, useParams } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

import { buttonVariants } from '@/components/common/Button';
import { NoteActions } from '@/components/common/NoteActions';
import { SpoilerText } from '@/components/common/SpoilerText';
import { ThoughtList } from '@/components/common/ThoughtList';
import { Container } from '@/components/layout/Container';
import { ContentWrapper } from '@/components/layout/ContentWrapper';
import { ROUTES } from '@/constants';
import { useAppSelector } from '@/redux/hook';
import { selectAllNotes } from '@/redux/selectors';
import { cn, filterThoughts } from '@/utils/helpers';

import { PostCheckout } from './PostCheckout';
import { ThoughtTable } from './ThoughtTable';

import s from './DiaryEntry.module.scss';

export const DiaryEntry = () => {
  const { id } = useParams();
  const notes = useAppSelector(selectAllNotes);

  const note = notes.find((noteItem) => noteItem.id === id);

  if (!note) {
    return <Navigate to={ROUTES.NOT_FOUND} replace />;
  }

  const filterThoughtsForView = filterThoughts(note.automaticThoughts);

  return (
    <Container width="small">
      <ContentWrapper>
        <div className={s.root}>
          <header>
            <NoteActions date={note.date} id={note.id} />
            <h1 className={s.title}>{note.title}</h1>
          </header>
          <section className={s.section}>
            <h3>Ситуация</h3>
            <div className={s.content}>
              {note?.situation !== '' ? (
                <p>{note.situation}</p>
              ) : (
                <Link
                  to={`/diary/${id}/edit#situation-label`}
                  className={cn(
                    buttonVariants({ variant: 'ghost' }),
                    'italic text-foreground/80 hover:text-secondary'
                  )}
                >
                  ...
                  <FeatherIcon icon="edit-2" size={18} />
                </Link>
              )}
            </div>
          </section>
          <section className={s.section}>
            <h3>Проработка мыслей</h3>
            <div className={s.content}>
              {filterThoughtsForView.length > 0 ? (
                <ThoughtList thoughts={filterThoughtsForView} />
              ) : (
                <ol className={s.textList}>
                  <li>
                    <Link
                      to={`/diary/${id}/edit#automatic-thoughts-label`}
                      className={cn(
                        buttonVariants({ variant: 'ghost' }),
                        'self-start hover:text-secondary'
                      )}
                    >
                      ...
                      <FeatherIcon icon="edit-2" size={18} />
                    </Link>
                  </li>
                </ol>
              )}
            </div>
          </section>
          <section className={s.section}>
            <h3>Ощущения</h3>
            <SpoilerText statusOpen={true}>
              <ThoughtTable data={note} />
            </SpoilerText>
          </section>
          <PostCheckout note={note} className={s.section} />
        </div>
      </ContentWrapper>
    </Container>
  );
};
