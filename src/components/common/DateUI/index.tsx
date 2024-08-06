import FeatherIcon from 'feather-icons-react';

import { formatDateForUI } from '@/utils';

import s from './DateUI.module.scss';

export const DateUI = ({ date }: { date: string }) => {
  const formattedDate = formatDateForUI(date);

  return (
    <span className={s.root} aria-label={`Дата записи: ${formattedDate}`}>
      <FeatherIcon icon="clock" size={20} aria-hidden="true" />
      {formattedDate}
    </span>
  );
};
