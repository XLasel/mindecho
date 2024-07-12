import { EmotionChip } from "../EmotionChip";

// import { biases } from "@/constants";

import s from "./EmotionChipList.module.scss";

export const EmotionChipList = ({ emotionData }) => {
  return (
    <div className={s.root}>
      {Object.keys(emotionData).map((groupName) =>
        emotionData[groupName].emojis.map(
          ({ emoji, label, name: emojiName }) => (
            <EmotionChip
              key={emojiName}
              emoji={emoji}
              label={label}
              selected={true}
            />
          ),
        ),
      )}
    </div>
  );
};
