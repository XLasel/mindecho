import React from 'react';
import { DateRange } from 'react-day-picker';
import { CalendarIcon } from '@radix-ui/react-icons';
import { ru } from 'date-fns/locale';

import { Button } from '@/components/common/Button';
import { Calendar } from '@/components/common/Calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/common/Popover';
import { cn, formatDateForUI } from '@/utils/helpers';

import s from './DateRangePicker.module.scss';

interface DateRangePickerProps extends React.ComponentPropsWithoutRef<'div'> {
  dateRange: DateRange | undefined;
  setDateRange: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
}

export const DateRangePicker: React.FC<DateRangePickerProps> = ({
  dateRange,
  setDateRange,
  className,
}) => {
  let dateDisplay;

  if (dateRange?.from) {
    if (dateRange.to) {
      dateDisplay = (
        <p>
          <span className={cn('whitespace-nowrap')}>
            {formatDateForUI(dateRange.from)}
          </span>{' '}
          -{' '}
          <span className={cn('whitespace-nowrap')}>
            {formatDateForUI(dateRange.to)}
          </span>
        </p>
      );
    } else {
      dateDisplay = formatDateForUI(dateRange.from);
    }
  } else {
    dateDisplay = <span>Выберете период</span>;
  }

  return (
    <div className={cn(s.root, className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={'neutral'}
            className={cn(
              'whitespace-normal h-auto min-h-10',
              !dateRange && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className="shrink-0 mr-2 h-4 w-4" />
            {dateDisplay}
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
