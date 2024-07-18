import { format, isWithinInterval,parseISO } from "date-fns";
import { ru } from "date-fns/locale";

import { Note } from "@/redux/noteSlice";

export const sortNotesByDate = (notes: Note[]) => {
  return [...notes].sort((a, b) => {
    const dateA = parseISO(a.date);
    const dateB = parseISO(b.date);
    return dateB.getTime() - dateA.getTime();
  });
};

export const formatDateForUI = (date: string | Date) => {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return format(dateObj, "d MMMM yyyy", { locale: ru });
};
export const filterNotesByDateRange = (
  notes: Note[],
  from: Date | string,
  to: Date | string,
): Note[] => {
  if (!from || !to) return notes;

  const startDate = typeof from === "string" ? parseISO(from) : from;
  const endDate = typeof to === "string" ? parseISO(to) : to;

  return notes.filter((note) =>
    isWithinInterval(parseISO(note.date), { start: startDate, end: endDate }),
  );
};
