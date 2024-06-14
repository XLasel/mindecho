import { Note } from "@/redux/noteSlice";
import {
  format,
  isThisMonth,
  isThisWeek,
  isThisYear,
  isToday,
  isYesterday,
  subDays,
} from "date-fns";

export const useGroupedNotes = (notes: Note[]) => {
  const grouped: { [key: string]: Note[] } = {};

  notes.forEach((note) => {
    const date = new Date(note.date);
    let key = "";
    switch (true) {
      case isToday(date):
        key = "Сегодня";
        break;
      case isYesterday(date):
        key = "Вчера";
        break;
      case isThisWeek(date):
        key = "Последние 7 дней";
        break;
      case date >= subDays(new Date(), 30):
        key = "Прошедшие 30 дней";
        break;
      case isThisMonth(date):
        key = "Текущий месяц";
        break;
      case isThisYear(date):
        key = "Текущий год";
        break;
      default:
        key = format(date, "yyyy");
        break;
    }

    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(note);
  });

  return grouped;
};
