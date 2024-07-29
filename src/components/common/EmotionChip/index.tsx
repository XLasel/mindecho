import React from 'react';

import { cn } from '@/utils/helpers';

import s from './EmotionChip.module.scss';

interface EmotionChipProps {
  emoji: string;
  label: string;
  selected: boolean;
  onClick?: () => void;
}

export const EmotionChip: React.FC<EmotionChipProps> = ({
  emoji,
  label,
  selected,
  onClick,
}) => (
  <div
    className={cn(s.root, selected && s.selected, !!onClick && s.clickable)}
    onClick={onClick}
  >
    <span role="img" aria-label={label}>
      {emoji}
    </span>
    <span>{label}</span>
  </div>
);
