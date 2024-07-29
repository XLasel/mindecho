import React from 'react';
import { type Control, Controller } from 'react-hook-form';

import { EmotionChip } from '@/components/common/EmotionChip';
import { emotionGroups } from '@/constants';
import { type FormFieldsType } from '@/scheme';

import s from './EmotionField.module.scss';

interface EmotionFieldProps {
  name: keyof FormFieldsType;
  control: Control<FormFieldsType>;
}

type EmotionGroupKeys = keyof typeof emotionGroups;
type EmotionFieldName = `emotions.${string}`;

export const EmotionField: React.FC<EmotionFieldProps> = ({
  name,
  control,
}) => (
  <div className={s.root}>
    {Object.keys(emotionGroups).map((groupName) => {
      const key = groupName as EmotionGroupKeys;
      return (
        <div key={key} className={s.group}>
          <h4>{emotionGroups[key].label}</h4>
          <div className={s.emotionGroup}>
            {emotionGroups[key].emojis.map(
              ({ emoji, label, name: emojiName }) => {
                const fieldName = `${name}.${emojiName}` as EmotionFieldName;
                return (
                  <Controller
                    key={emojiName}
                    name={fieldName}
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
                );
              }
            )}
          </div>
        </div>
      );
    })}
  </div>
);
