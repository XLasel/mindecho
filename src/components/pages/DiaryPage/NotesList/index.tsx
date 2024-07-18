import { useSearchParams } from "react-router-dom";
import { z } from "zod";

import { Button } from "@/components/common/Button";
import { useFilteredNotes } from "@/hook/useFilteredNotes";
import { useGroupedNotes } from "@/hook/useGroupedNotes";
import { usePagination } from "@/hook/usePagination";
import { sortNotesByDate } from "@/lib/dateUtils";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { searchParamsSchema } from "@/scheme";

import { NoteItem } from "../NoteItem";

import s from "./NotesList.module.scss";

export const NotesList: React.FC = () => {
  const notes = useAppSelector((state: RootState) => state.notes.notes);
  const [searchParams] = useSearchParams();
  let q = "",
    start_date = "",
    end_date = "";

  try {
    const validatedParams = searchParamsSchema.parse(
      Object.fromEntries(searchParams)
    );
    q = validatedParams.q || "";
    start_date = validatedParams.start_date || "";
    end_date = validatedParams.end_date || "";
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Invalid search params:", error.errors);
      // Можно установить сообщения об ошибке для отображения в компоненте
    } else {
      console.error("Unexpected error:", error);
    }
  }
  console.log(start_date);
  const { filteredNotes, message } = useFilteredNotes(
    notes,
    q,
    start_date,
    end_date
  );
  console.log(q);
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
        Object.entries(groupedNotes).map(([group, notes]) => (
          <div className={s.listGroup} key={group}>
            <h2>{group}</h2>
            <ul className={s.notesList}>
              {notes.map((note) => (
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
// export const NotesList: React.FC = () => {
//   const notes = useAppSelector((state: RootState) => state.notes.notes);
//   const [searchParams] = useSearchParams();

//   try {
//     const validatedParams = searchParamsSchema.parse(Object.fromEntries(searchParams));
//     const { qy, start_date, end_date } = validatedParams;
//     // Используйте параметры q, start_date, end_date далее в вашем коде
//   } catch (error) {
//     if (error instanceof z.ZodError) {
//       console.error('Invalid search params:', error.errors);
//       // Обработка ошибок валидации Zod
//     } else {
//       console.error('Unexpected error:', error);
//       // Обработка других ошибок
//     }
//   }

//   const q = qy || "";
//   const startDate = start_date || "";
//   const endDate = searchParams.get("end_date") || "";

//   const { filteredNotes, message } = useFilteredNotes(
//     notes,
//     q,
//     startDate,
//     endDate,
//   );

//   const sortedNotesByDate = sortNotesByDate(filteredNotes);

//   const {
//     currentPage,
//     totalPages,
//     nextPage,
//     prevPage,
//     startIndex,
//     endIndex,
//     showNavigation,
//   } = usePagination(sortedNotesByDate.length);

//   const currentPageNotes = sortedNotesByDate.slice(startIndex, endIndex);
//   const groupedNotes = useGroupedNotes(currentPageNotes);

//   return (
//     <div className={s.root}>
//       {filteredNotes.length !== 0 ? (
//         Object.entries(groupedNotes).map(([group, notes]) => (
//           <div className={s.listGroup} key={group}>
//             <h2>{group}</h2>
//             <ul className={s.notesList}>
//               {notes.map((note) => (
//                 <NoteItem key={note.id} {...note} />
//               ))}
//             </ul>
//           </div>
//         ))
//       ) : (
//         <div className={s.message}>{message}</div>
//       )}
//       {showNavigation && (
//         <div className={s.paginationNav}>
//           <Button
//             variant="ghost"
//             onClick={() => prevPage()}
//             disabled={currentPage === 1}
//           >
//             Предыдущая
//           </Button>
//           <span>{`${currentPage} / ${totalPages}`}</span>
//           <Button
//             variant="ghost"
//             onClick={() => nextPage()}
//             disabled={currentPage === totalPages}
//           >
//             Следующая
//           </Button>
//         </div>
//       )}
//     </div>
//   );
// };
