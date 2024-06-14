import { isWithinInterval, parseISO } from "date-fns";
import { useSearchParams } from "react-router-dom";

export const useSearchParamsByDateRangeFilters = ({ notes, dateRange }) => {
  const [searchParams] = useSearchParams();

  const startDate = searchParams.get("start_date");
  const endDate = searchParams.get("end_date");
  if (!startDate || !endDate) return notes;

  return notes.filter((note) =>
    isWithinInterval(parseISO(note.date), { start: startDate, end: endDate })
  );
};
