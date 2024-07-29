export type NameSectionType = {
  title: string;
  idFormInput: string;
};

export type SectionDataType = { [key: string]: NameSectionType };

export interface Emoji {
  name: string;
  emoji: string;
  label: string;
}

export interface EmotionGroup {
  label: string;
  emojis: Emoji[];
}

export type EmotionGroups = Record<string, EmotionGroup>;

export interface CognitiveBias {
  id: string;
  title: string;
  description: string;
  examples?: string[];
  emoji: string;
}
