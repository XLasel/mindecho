import React from 'react';
import { Control, Controller } from 'react-hook-form';

import { CognitiveBiasCard } from '@/components/common/CognitiveBiasCard';
import { biases } from '@/constants';
import { CognitiveBias } from '@/constants/types';
import { type FormFieldsType } from '@/scheme';
import { splitArrayInHalf } from '@/utils';

import s from './CognitiveBiasField.module.scss';

interface CognitiveBiasFieldProps {
  name: keyof FormFieldsType;
  control: Control<FormFieldsType>;
}

type CognitiveBiasNameProps =
  `cognitiveDistortions.${keyof FormFieldsType['cognitiveDistortions']}`;

const BiasColumn: React.FC<{
  biasesList: CognitiveBias[];
  name: keyof FormFieldsType;
  control: Control<FormFieldsType>;
}> = ({ biasesList, name, control }) => (
  <>
    {biasesList.map((bias) => {
      const fieldName = `${name}.${bias.id}` as CognitiveBiasNameProps;
      return (
        <Controller
          key={bias.id}
          name={fieldName}
          control={control}
          defaultValue={false}
          render={({ field: { onChange, value } }) => (
            <CognitiveBiasCard
              bias={bias}
              onChange={() => onChange(!value)}
              checked={!!value}
            />
          )}
        />
      );
    })}
  </>
);

export const CognitiveBiasField: React.FC<CognitiveBiasFieldProps> = ({
  name,
  control,
}) => {
  const { leftColumn, rightColumn } = splitArrayInHalf(biases);

  return (
    <div className={s.root}>
      <div className={s.column}>
        <BiasColumn biasesList={leftColumn} name={name} control={control} />
      </div>
      <div className={s.column}>
        <BiasColumn biasesList={rightColumn} name={name} control={control} />
      </div>
    </div>
  );
};
