import React from "react";
import { Controller } from "react-hook-form";

import { EmotionChip } from "@/components/common/EmotionChip";

import { emotionGroups } from "@/constants";

import s from "./EmotionField.module.scss";

export const EmotionField: React.FC<{ name: string; control: any }> = ({
  name,
  control,
}) => {
  return (
    <div className={s.root}>
      {Object.keys(emotionGroups).map((groupName) => (
        <div key={groupName} className={s.group}>
          <h5>{emotionGroups[groupName].label}</h5>
          <div className={s.emotionGroup}>
            {emotionGroups[groupName].emojis.map(
              ({ emoji, label, name: emojiName }) => (
                <Controller
                  key={emojiName}
                  name={`${name}.${emojiName}`}
                  control={control}
                  defaultValue={false}
                  render={({ field: { onChange, value } }) => (
                    <EmotionChip
                      emoji={emoji}
                      label={label}
                      onClick={() => onChange(!value)}
                      selected={value}
                    />
                  )}
                />
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
