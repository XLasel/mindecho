import React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format, parse } from "date-fns";
import { ru } from "date-fns/locale";
import { DateRange } from "react-day-picker";
import { useSearchParams } from "react-router-dom";

import { cn } from "@/lib/utils";
import { Button } from "@/components/common/Button";
import { Calendar } from "@/components/common/Calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/common/Popover";
import { ExportButton } from "./ExportButton";

import s from "./DatePicker.module.scss";

export function DatePickerWithRange({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultValue = {
    from: searchParams.get("start_date")
      ? parse(searchParams.get("start_date"), "yyyy-MM-dd", new Date())
      : null,
    to: searchParams.get("end_date")
      ? parse(searchParams.get("end_date"), "yyyy-MM-dd", new Date())
      : null,
  };
  const [dateRange, setdateRange] = React.useState<DateRange | undefined>(
    defaultValue
  );

  const handleSearch = (e) => {
    e.preventDefault();

    const { from, to } = dateRange;

    if (!from || !to) return;

    const startDate = format(from, "yyyy-MM-dd");
    const endDate = format(to, "yyyy-MM-dd");

    setSearchParams((prev) => {
      prev.set("start_date", startDate);
      return prev;
    });

    setSearchParams((prev) => {
      prev.set("end_date", endDate);
      return prev;
    });
  };

  const handleReset = () => {
    setSearchParams((prev) => {
      prev.delete("start_date");
      prev.delete("end_date");
      return prev;
    });
    setdateRange({
      from: null,
      to: null,
    });
  };

  return (
    <form onSubmit={handleSearch} className={s.root}>
      <div className={cn("grid gap-2", className)}>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={"outline"}
              className={cn("", !dateRange && "text-muted-foreground")}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {dateRange?.from ? (
                dateRange.to ? (
                  <>
                    {format(dateRange.from, "dd MMMM yyyy", { locale: ru })} -{" "}
                    {format(dateRange.to, "dd MMMM yyyy", { locale: ru })}
                  </>
                ) : (
                  format(dateRange.from, "dd MMMM yyyy", { locale: ru })
                )
              ) : (
                <span>Выберете период</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={dateRange?.from}
              selected={dateRange}
              onSelect={setdateRange}
              numberOfMonths={2}
              locale={ru}
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className={s.buttons}>
        <Button type="submit" disabled={!dateRange?.from || !dateRange?.to}>
          Показать записи
        </Button>
        <ExportButton
          disabled={!dateRange?.from || !dateRange?.to}
          startDate={dateRange?.from}
          endDate={dateRange?.to}
        />
        <Button type="reset" onClick={handleReset} variant="ghost">
          Сбросить
        </Button>
      </div>
    </form>
  );
}
