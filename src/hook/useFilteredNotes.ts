import { SearchParamsType } from '@/scheme';
import { filterNotesByDateRange } from '@/utils/helpers';

interface UseFilteredNotesResult {
  filteredNotes: Note[];
  isFiltered: boolean;
  message: string | null;
}

export const useFilteredNotes = (
  notes: Note[],
  searchParams: SearchParamsType['q'],
  startDate: SearchParamsType['start_date'],
  endDate: SearchParamsType['end_date']
): UseFilteredNotesResult => {
  let filteredNotes = notes;
  let isFiltered = false;
  let message = null;

  if (searchParams) {
    filteredNotes = filteredNotes.filter((note) =>
      Object.values(note).some(
        (value) =>
          typeof value === 'string' &&
          value.toLowerCase().includes(searchParams.toLowerCase())
      )
    );
    isFiltered = true;
    if (filteredNotes.length === 0) {
      message = 'Записи с указанным запросом не найдены';
    }
  }

  if (startDate && endDate) {
    filteredNotes = filterNotesByDateRange(filteredNotes, startDate, endDate);
    isFiltered = true;
    if (filteredNotes.length === 0) {
      message = 'В указанном диапазоне записей не найдено';
    }
  }

  return { filteredNotes, isFiltered, message };
};
