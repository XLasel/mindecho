import { EmotionGroups } from '@/constants/types';

import { EmotionChip } from '../EmotionChip';

import s from './EmotionChipList.module.scss';

export const EmotionChipList = ({
  emotionData,
}: {
  emotionData: EmotionGroups;
}) => (
  <div className={s.root}>
    {Object.keys(emotionData).map((groupName) =>
      emotionData[groupName].emojis.map(({ emoji, label, name: emojiName }) => (
        <EmotionChip
          key={emojiName}
          emoji={emoji}
          label={label}
          selected={true}
        />
      ))
    )}
  </div>
);
