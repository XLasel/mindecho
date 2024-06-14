import { useSearchParams } from "react-router-dom";

import { RootState } from "@/redux/store";
import { useAppSelector } from "@/redux/hook";

import { Button } from "@/components/common/Button";
import { NoteItem } from "../NoteItem";

import { useFilteredNotes } from "@/hook/useFilteredNotes";
import { sortNotesByDate } from "@/lib/dateUtils";
import { usePagination } from "@/hook/usePagination";
import { useGroupedNotes } from "@/hook/useGroupedNotes";

import s from "./NotesList.module.scss";

export const NotesList: React.FC = () => {
  const notes = useAppSelector((state: RootState) => state.notes.notes);
  const [searchParams] = useSearchParams();

  const q = searchParams.get("q") || "";
  const startDate = searchParams.get("start_date") || "";
  const endDate = searchParams.get("end_date") || "";

  const { filteredNotes, message } = useFilteredNotes(
    notes,
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
    goToPage,
    startIndex,
    endIndex,
    showNavigation,
  } = usePagination(sortedNotesByDate.length);

  const currentPageNotes = sortedNotesByDate.slice(startIndex, endIndex);
  const groupedNotes = useGroupedNotes(currentPageNotes);

  return (
    <div className={s.root}>
      {filteredNotes.length !== 0 ? (
        Object.entries(groupedNotes).map(([group, notes]) => (
          <div className={s.listGroup} key={group}>
            <h3>{group}</h3>
            <ul className={s.notesList}>
              {notes.map((note) => (
                <NoteItem key={note.id} {...note} />
              ))}
            </ul>
          </div>
        ))
      ) : (
        <div>{message}</div>
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
