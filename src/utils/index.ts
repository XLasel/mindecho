import { type ClassValue, clsx } from 'clsx';
import { format, isWithinInterval, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';
import { cloneDeep } from 'lodash';
import { twMerge } from 'tailwind-merge';

import {
  biases as biasesConstant,
  emotionGroups as emotionGroupsConstant,
} from '@/constants';
import type {
  CognitiveBias,
  Emoji,
  EmotionGroup,
  EmotionGroups,
} from '@/constants/types';
import { SearchParamsType } from '@/scheme';

// Function to merge class names using clsx and tailwind-merge
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

// Function to filter automatic thoughts that have both thought and response
export const filterThoughts = (
  automaticThoughts: Note['automaticThoughts'] | undefined
) => {
  return automaticThoughts?.filter((el) => !!el.thought && !!el.response) || [];
};

// Function to check if an object is empty
export const isEmptyObject = <T extends object>(obj: T): boolean =>
  !obj || Object.entries(obj).length === 0;

// Function to normalize range values
export const normalizeRangeValue = (value: number | undefined): number =>
  typeof value !== 'undefined' ? Number(value) : 1;

// Function to get keys from a record where the value is true
export const getKeysByValue = (record: { [key: string]: boolean }): string[] =>
  Object.keys(record).filter((key) => record[key]);

// Function to filter items by keys
export const filterByKeys = <T>(
  items: T[],
  keys: string[],
  keyProp: keyof T
): T[] =>
  items.filter((item) => keys.includes(item[keyProp] as unknown as string));

// Function to filter biases based on cognitive distortions
export const filteredBiases = (
  cognitiveDistortions: Note['cognitiveDistortions'] | undefined,
  biases: CognitiveBias[]
) =>
  cognitiveDistortions !== undefined
    ? filterByKeys(biases, getKeysByValue(cognitiveDistortions), 'id')
    : [];

// Function to filter emotion groups based on emotions
export const filteredEmotionsGroup = (
  emotions: Note['emotions'],
  emotionGroups: EmotionGroups
) => {
  const filteredGroups = cloneDeep(emotionGroups);
  const emotionKeys = getKeysByValue(emotions);

  (
    Object.entries(filteredGroups) as [keyof EmotionGroups, EmotionGroup][]
  ).forEach(([groupKey, groupData]) => {
    // eslint-disable-next-line no-param-reassign
    groupData.emojis = filterByKeys(groupData.emojis, emotionKeys, 'name');

    if (groupData.emojis.length === 0) {
      delete filteredGroups[groupKey];
    }
  });

  return filteredGroups;
};

// Function to format date for UI
export const formatDateForUI = (date: string | Date) => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format(dateObj, 'd MMMM yyyy', { locale: ru });
};

type SplitArrayResult<T> = {
  leftColumn: T[];
  rightColumn: T[];
};

// Function to split an array into two halves
export const splitArrayInHalf = <T>(array: T[]): SplitArrayResult<T> => {
  const half = Math.ceil(array.length / 2);
  const leftColumn = array.slice(0, half);
  const rightColumn = array.slice(half);

  return { leftColumn, rightColumn };
};

// Function to prepare table data from notes
export const prepareTableData = (notes: Note[]) => {
  return notes.map((note) => {
    const prepareEmotionData = filteredEmotionsGroup(
      note?.emotions,
      emotionGroupsConstant
    );
    const prepareBiasesData = filteredBiases(
      note?.cognitiveDistortions,
      biasesConstant
    );
    return [
      [formatDateForUI(note.date), note.situation].join('\n\n'),
      note.automaticThoughts
        .map((at, index) =>
          at.thought ? `${index + 1}. ${at.thought}` : `${index + 1}. ...`
        )
        .join('\n'),
      Object.values(prepareEmotionData)
        .flatMap((group) => group.emojis.map((emotion: Emoji) => emotion.label))
        .join(', '),
      [
        note.physicalSensations,
        `Уровень дискомфорта: ${note.discomfortLevel}/10`,
      ]
        .filter(Boolean)
        .join('\n\n'),
      note.behavior,
      prepareBiasesData.map((bias) => bias.title).join(', '),
      note.automaticThoughts
        .map((at, index) =>
          at.response ? `${index + 1}. ${at.response}` : `${index + 1}. ...`
        )
        .join('\n'),
      [
        `Комментарий: ${note.postComment || '...'}`,
        `Дискомфорт:` +
          ` ${note?.newDiscomfortLevel ? `${note.newDiscomfortLevel}/10` : '...'}`,
      ].join('\n\n'),
    ];
  });
};

// Function to sort notes by date
export const sortNotesByDate = (notes: Note[]) => {
  return [...notes].sort((a, b) => {
    const dateA = parseISO(a.date);
    const dateB = parseISO(b.date);
    return dateB.getTime() - dateA.getTime();
  });
};

// Function to filter notes by date range
export const filterNotesByDateRange = (
  notes: Note[],
  from: SearchParamsType['start_date'] | Date,
  to: SearchParamsType['end_date'] | Date
): Note[] => {
  if (!from || !to) return notes;

  const startDate = typeof from === 'string' ? parseISO(from) : from;
  const endDate = typeof to === 'string' ? parseISO(to) : to;

  return notes.filter((note) =>
    isWithinInterval(parseISO(note.date), { start: startDate, end: endDate })
  );
};

// Function to check if an element has multiple children
export const hasMultipleChildren = (
  children: JSX.Element | JSX.Element[]
): boolean => {
  return Array.isArray(children) && children.length > 1;
};
