import { filterNotesByDateRange } from "@/lib/dateUtils";
import { Note } from "@/redux/noteSlice";

interface UseFilteredNotesResult {
  filteredNotes: Note[];
  isFiltered: boolean;
  message: string | null;
}

export const useFilteredNotes = (
  notes: Note[],
  searchParams: string,
  startDate: string,
  endDate: string,
): UseFilteredNotesResult => {
  let filteredNotes = notes;
  let isFiltered = false;
  let message: string | null = null;

  if (searchParams) {
    filteredNotes = filteredNotes.filter((note) =>
      Object.values(note).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(searchParams.toLowerCase()),
      ),
    );
    isFiltered = true;
    if (filteredNotes.length === 0) {
      message = "Записи с указанным запросом не найдены";
    }
  }

  if (startDate && endDate) {
    filteredNotes = filterNotesByDateRange(filteredNotes, startDate, endDate);
    isFiltered = true;
    if (filteredNotes.length === 0) {
      message = "В указанном диапазоне записей не найдено";
    }
  }

  return { filteredNotes, isFiltered, message };
};
