import React from 'react';

import type { CognitiveBias } from '@/constants/types';

import { CognitiveBiasBadge } from '../CognitiveBiasBadge';

import s from './CognitiveBiasBadgeList.module.scss';

interface CognitiveBiasBadgeListProps {
  biasesData: CognitiveBias[];
}

export const CognitiveBiasBadgeList: React.FC<CognitiveBiasBadgeListProps> = ({
  biasesData,
}) => (
  <div className={s.root}>
    {biasesData.map((bias) => (
      <CognitiveBiasBadge key={bias.id} {...bias} />
    ))}
  </div>
);
