import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatDateForUI } from "./dateUtils";
import { cloneDeep } from "lodash";

import { biases, emotionGroups } from "@/constants";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getKeysByValue = (record: { [key: string]: boolean }) =>
  Object.keys(record).filter((key) => record[key]);

export const filterByKeys = <T>(
  items: T[],
  keys: string[],
  keyProp: keyof T
): T[] =>
  items.filter((item) => keys.includes(item[keyProp] as unknown as string));

export const filteredBiases = (cognitiveDistortions, biases) =>
  filterByKeys(biases, getKeysByValue(cognitiveDistortions), "id");

export const filteredEmotionsGroup = (emotions, emotionGroups) => {
  const filteredGroups = cloneDeep(emotionGroups);
  const emotionKeys = getKeysByValue(emotions);

  Object.entries(filteredGroups).forEach(([groupKey, groupData]) => {
    groupData.emojis = filterByKeys(groupData.emojis, emotionKeys, "name");

    if (groupData.emojis.length === 0) {
      delete filteredGroups[groupKey];
    }
  });

  return filteredGroups;
};

type SplitArrayResult<T> = {
  leftColumn: T[];
  rightColumn: T[];
};

export const splitArrayInHalf = <T>(array: T[]): SplitArrayResult<T> => {
  const half = Math.ceil(array.length / 2);
  const leftColumn = array.slice(0, half);
  const rightColumn = array.slice(half);

  return { leftColumn, rightColumn };
};

export const prepareTableData = (notes) => {
  return notes.map((note) => {
    const prepareEmotionData = filteredEmotionsGroup(
      note?.emotions,
      emotionGroups
    );
    console.log(prepareEmotionData);
    const prepareBiasesData = filteredBiases(
      note?.cognitiveDistortions,
      biases
    );
    return [
      formatDateForUI(note.date),
      // note.title,
      note.situation,
      note.automaticThoughts
        .map((at, index) => `${index + 1}. ${at.thought}`)
        .join("\n"),
      Object.values(prepareEmotionData)
        .flatMap((group) => group.emojis.map((emotion) => emotion.label))
        .join(", "),
      note.physicalSensations,
      note.behavior,
      note.discomfortLevel,
      prepareBiasesData.map((bias) => bias.title).join(", "),
      note.automaticThoughts
        .map((at, index) => `${index + 1}. ${at.response}`)
        .join("\n"),
      note.postComment || "",
      note.newDiscomfortLevel || "",
    ];
  });
};
