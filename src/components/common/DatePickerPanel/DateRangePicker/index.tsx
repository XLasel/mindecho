import React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { ru } from "date-fns/locale";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { formatDateForUI } from "@/lib/dateUtils";

import { Button } from "@/components/common/Button";
import { Calendar } from "@/components/common/Calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/common/Popover";

import s from "./DateRangePicker.module.scss";

interface DateRangePickerProps extends React.ComponentPropsWithoutRef<"div"> {
  dateRange: DateRange | undefined;
  setDateRange: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
}

export const DateRangePicker: React.FC<DateRangePickerProps> = ({
  dateRange,
  setDateRange,
  className,
}) => {
  return (
    <div className={cn(s.root, className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"neutral"}
            className={cn("", !dateRange && "text-muted-foreground")}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {dateRange?.from ? (
              dateRange.to ? (
                <>
                  {formatDateForUI(dateRange.from)} -{" "}
                  {formatDateForUI(dateRange.to)}
                </>
              ) : (
                formatDateForUI(dateRange.from)
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
            onSelect={setDateRange}
            numberOfMonths={2}
            locale={ru}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
