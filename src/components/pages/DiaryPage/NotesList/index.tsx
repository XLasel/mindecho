import { useSearchParams } from 'react-router-dom';

import { Button } from '@/components/common/Button';
import { useFilteredNotes } from '@/hook/useFilteredNotes';
import { useGroupedNotes } from '@/hook/useGroupedNotes';
import { usePagination } from '@/hook/usePagination';
import { useAppSelector } from '@/redux/hook';
import { selectAllNotes } from '@/redux/selectors';
import { searchParamsSchema } from '@/scheme';
import { sortNotesByDate } from '@/utils/helpers';

import { NoteItem } from '../NoteItem';

import s from './NotesList.module.scss';

export const NotesList: React.FC = () => {
  const allNotes = useAppSelector(selectAllNotes);
  const [searchParams] = useSearchParams();
  let q = '';
  let startDate = '';
  let endDate = '';

  const parsedParams = searchParamsSchema.safeParse(
    Object.fromEntries(searchParams)
  );

  if (parsedParams.success) {
    const validatedParams = parsedParams.data;
    q = validatedParams.q || '';
    startDate = validatedParams.start_date || '';
    endDate = validatedParams.end_date || '';
  }

  const { filteredNotes, message } = useFilteredNotes(
    allNotes,
    q,
    startDate,
    endDate
  );

  const sortedNotesByDate = sortNotesByDate(filteredNotes);

  const {
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    startIndex,
    endIndex,
    showNavigation,
  } = usePagination(sortedNotesByDate.length);

  const currentPageNotes = sortedNotesByDate.slice(startIndex, endIndex);
  const groupedNotes = useGroupedNotes(currentPageNotes);

  return (
    <div className={s.root}>
      {filteredNotes.length !== 0 ? (
        Object.entries(groupedNotes).map(([group, notesGroup]) => (
          <div className={s.listGroup} key={group}>
            <h2>{group}</h2>
            <ul className={s.notesList}>
              {notesGroup.map((note) => (
                <NoteItem key={note.id} {...note} />
              ))}
            </ul>
          </div>
        ))
      ) : (
        <div className={s.message}>{message}</div>
      )}
      {showNavigation && (
        <div className={s.paginationNav}>
          <Button
            variant="ghost"
            onClick={() => prevPage()}
            disabled={currentPage === 1}
          >
            Предыдущая
          </Button>
          <span>{`${currentPage} / ${totalPages}`}</span>
          <Button
            variant="ghost"
            onClick={() => nextPage()}
            disabled={currentPage === totalPages}
          >
            Следующая
          </Button>
        </div>
      )}
    </div>
  );
};
