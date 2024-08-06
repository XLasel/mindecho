import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionHeader,
} from '@/components/common/accordion';
import { SpoilerText } from '@/components/common/SpoilerText';
import type { CognitiveBias } from '@/constants/types';
import { cn } from '@/utils';

import s from './CognitiveBiasCard.module.scss';

interface CognitiveBiasCardProps {
  bias: CognitiveBias;
  onChange?: () => void;
  checked?: boolean;
}

export const CognitiveBiasCard: React.FC<CognitiveBiasCardProps> = ({
  bias,
  onChange,
  checked,
}) => (
  <div className={cn(s.root, checked && s.rootChecked)}>
    <Accordion cardStyle="flow">
      <AccordionHeader>
        <div className={s.header}>
          <h4 className={s.title}>{bias.title}</h4>
          {onChange && (
            <label className={s.checkbox}>
              <input type="checkbox" checked={checked} onChange={onChange} />
              {checked && <span className={s.iconChecked} />}
            </label>
          )}
        </div>
      </AccordionHeader>
      <AccordionContent>
        {bias.description && <p>{bias.description}</p>}
        {bias.examples && (
          <SpoilerText titleClosed="Пример">
            <ul>
              {bias.examples.map((example, index) => (
                <li key={index}>
                  <i>{example}</i>
                </li>
              ))}
            </ul>
          </SpoilerText>
        )}
      </AccordionContent>
    </Accordion>
  </div>
);
