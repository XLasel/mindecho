import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

import { cn } from '@/utils';

import { Button } from '../Button';

import s from './Search.module.scss';

export const SearchInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithRef<'input'>
>(({ className, type, ...props }, ref) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');

  const handleReset = () => {
    setSearchParams((prev) => {
      prev.delete('q');
      return prev;
    });
    setQuery('');
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearchParams((prev) => {
        if (query.trim() === '') {
          prev.delete('q');
        } else {
          prev.set('q', query);
        }
        return prev;
      });
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [query, setSearchParams]);

  return (
    <div className={s.root}>
      <FeatherIcon className={s.iconSearch} icon="search" size={24} />
      <input
        type={type}
        className={cn(s.input, className)}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        ref={ref}
        {...props}
      />
      <Button
        type="button"
        aria-label="Сбросить запрос"
        variant="ghost"
        size="icon"
        className="p-0"
        onClick={handleReset}
        disabled={!query}
      >
        <FeatherIcon icon="x-circle" size={24} />
      </Button>
    </div>
  );
});
SearchInput.displayName = 'SearchInput';
