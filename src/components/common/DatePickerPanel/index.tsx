import React, { useEffect, useState } from 'react';
import { DateRange } from 'react-day-picker';
import { useSearchParams } from 'react-router-dom';
import { format, parse } from 'date-fns';

import { Button } from '@/components/common/Button';
import { searchParamsSchema, SearchParamsType } from '@/scheme';

import { DateRangePicker } from './DateRangePicker';
import { ExportButton } from './ExportButton';

import s from './DatePickerPanel.module.scss';

export const DatePickerPanel = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);

  useEffect(() => {
    const params: Partial<SearchParamsType> = {
      start_date: searchParams.get('start_date') || undefined,
      end_date: searchParams.get('end_date') || undefined,
    };

    const parsedParams = searchParamsSchema.safeParse(params);

    if (parsedParams.success) {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const { start_date, end_date } = parsedParams.data;

      const defaultValue: DateRange = {
        from: start_date
          ? parse(start_date, 'yyyy-MM-dd', new Date())
          : undefined,
        to: end_date ? parse(end_date, 'yyyy-MM-dd', new Date()) : undefined,
      };

      setDateRange(defaultValue);
    } else {
      console.error('Invalid date format in URL parameters');
      setDateRange({ from: undefined, to: undefined });
    }
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const { from, to } = dateRange ?? {};

    if (!from || !to) return;

    const startDate = format(from, 'yyyy-MM-dd');
    const endDate = format(to, 'yyyy-MM-dd');

    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set('start_date', startDate);
      newParams.set('end_date', endDate);
      return newParams;
    });
  };

  const handleReset = () => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.delete('start_date');
      newParams.delete('end_date');
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
