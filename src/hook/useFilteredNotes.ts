import { filterNotesByDateRange } from "@/lib/dateUtils";
import { Note } from "@/redux/noteSlice";

export const useFilteredNotes = (
  notes: Note[],
  searchParams: string,
  startDate: string,
  endDate: string
) => {
  let filteredNotes = notes;
  let isFiltered = false;
  let message: string | null = null;
  console.log(filteredNotes);

  if (searchParams) {
    filteredNotes = filteredNotes.filter((note: Note) => {
      return Object.values(note).some((value) => {
        return (
          typeof value === "string" &&
          value.toLowerCase().includes(searchParams.toLowerCase())
        );
      });
    });
    isFiltered = true;
    if (filteredNotes.length === 0) {
      message = "Записи с указанным запросом не найдены";
    }
  }

  // if (startDate && endDate) {
  //   filteredNotes = filteredNotes.filter(
  //     (note: Note) =>
  //       new Date(note.date) >= new Date(startDate) &&
  //       new Date(note.date) <= new Date(endDate)
  //   );
  //   isFiltered = true;
  //   if (filteredNotes.length === 0) {
  //     message = "В указанном диапазоне записей не найдено";
  //   }
  // }

  if (startDate && endDate) {
    filteredNotes = filterNotesByDateRange(filteredNotes, startDate, endDate);
    isFiltered = true;
    if (filteredNotes.length === 0) {
      message = "В указанном диапазоне записей не найдено";
    }
  }
  return { filteredNotes, isFiltered, message };
};
