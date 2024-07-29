import React from 'react';
import { DayPicker } from 'react-day-picker';

import { cn } from '@/utils/helpers';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

export const Calendar: React.FC<CalendarProps> = ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) => (
  <DayPicker
    showOutsideDays={showOutsideDays}
    className={cn('p-3', className)}
    classNames={{
      months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
      month: 'space-y-4',
      caption: 'flex justify-center pt-1 relative items-center',
      caption_label: 'text-base font-medium',
      nav: 'space-x-1 flex items-center',
      nav_button: 'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
      nav_button_previous: 'absolute left-1',
      nav_button_next: 'absolute right-1',
      table: 'w-full border-collapse space-y-1',
      head_row: 'flex',
      head_cell:
        'text-muted-foreground rounded-sm w-8 font-normal text-[0.8rem]',
      row: 'flex w-full mt-2',
      cell: cn(
        'relative p-0 text-center text-xs focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-background [&:has([aria-selected].day-outside)]:bg-background/50 [&:has([aria-selected].day-range-end)]:rounded-r-md',
        props.mode === 'range'
          ? '[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md'
          : '[&:has([aria-selected])]:rounded-sm'
      ),
      day: 'inline-flex items-center justify-center whitespace-nowrap rounded-sm text-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-8 w-8 p-0 font-normal aria-selected:opacity-100',
      day_range_start: 'day-range-start',
      day_range_end: 'day-range-end',
      day_selected:
        'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
      day_today: 'bg-background text-foreground',
      day_outside:
        'day-outside text-muted-foreground opacity-50  aria-selected:bg-background/50 aria-selected:text-muted-foreground aria-selected:opacity-30',
      day_disabled: 'text-muted-foreground opacity-50',
      day_range_middle:
        'aria-selected:bg-background aria-selected:text-foreground',
      day_hidden: 'invisible',
      ...classNames,
    }}
    {...props}
  />
);

Calendar.displayName = 'Calendar';
