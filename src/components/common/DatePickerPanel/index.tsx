import React from "react";
import { format, parse } from "date-fns";
import { DateRange } from "react-day-picker";
import { useSearchParams } from "react-router-dom";

import { Button } from "@/components/common/Button";
import { DateRangePicker } from "./DateRangePicker";
import { ExportButton } from "./ExportButton";

import s from "./DatePickerPanel.module.scss";

export const DatePickerPanel = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultValue: DateRange = {
    from: searchParams.get("start_date")
      ? parse(
          searchParams.get("start_date") as string,
          "yyyy-MM-dd",
          new Date(),
        )
      : undefined,
    to: searchParams.get("end_date")
      ? parse(searchParams.get("end_date") as string, "yyyy-MM-dd", new Date())
      : undefined,
  };
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>(
    defaultValue,
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const { from, to } = dateRange ?? {};

    if (!from || !to) return;

    const startDate = format(from, "yyyy-MM-dd");
    const endDate = format(to, "yyyy-MM-dd");

    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set("start_date", startDate);
      newParams.set("end_date", endDate);
      return newParams;
    });
  };

  const handleReset = () => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.delete("start_date");
      newParams.delete("end_date");
      return newParams;
    });
    setDateRange({
      from: undefined,
      to: undefined,
    });
  };

  return (
    <form onSubmit={handleSearch} className={s.root}>
      <DateRangePicker
        dateRange={dateRange}
        setDateRange={setDateRange}
        className={s.calendar}
      />
      <ExportButton
        className={s.export}
        startDate={dateRange?.from}
        endDate={dateRange?.to}
      />
      <Button
        className={s.submit}
        type="submit"
        disabled={!dateRange?.from || !dateRange?.to}
      >
        Показать записи
      </Button>
      <Button
        className={s.reset}
        type="reset"
        onClick={handleReset}
        variant="ghost"
        disabled={!dateRange?.from || !dateRange?.to}
      >
        Сбросить
      </Button>
    </form>
  );
};
