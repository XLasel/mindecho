/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ArrayPath,
  FieldArray,
  FieldValues,
  UseFieldArrayReturn,
  useFormContext,
} from 'react-hook-form';
import FeatherIcon from 'feather-icons-react';

import { Button } from '@/components/common/Button';
import { ResizableTextarea } from '@/components/common/ResizableTextarea';
import { cn } from '@/utils';

import s from './DynamicInputForm.module.scss';

interface DynamicInputFormProps<T extends FieldValues, K extends ArrayPath<T>> {
  label: K;
  pattern: Partial<FieldArray<T, K>>;
  fieldArray: UseFieldArrayReturn<T, K>;
}

export const DynamicInputForm = <
  T extends FieldValues,
  K extends ArrayPath<T>,
>({
  label,
  pattern,
  fieldArray,
}: DynamicInputFormProps<T, K>) => {
  const {
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext();
  const { fields, append, remove } = fieldArray;
  const keysPattern = Object.keys(pattern);

  const addInput = () => append(pattern as FieldArray<T, K>);

  const removeInput = (index: number) => {
    if (fields.length !== 1) return remove(index);
    setValue(`${label as string}.${index}.${keysPattern[0]}`, '');
  };

  return (
    <div className={s.root}>
      <ul className={s.list}>
        {fields.map((field, index) => {
          const errorField = (errors?.[label] as Record<number, any>)?.[
            index
          ]?.[keysPattern[0]];
          return (
            <li key={field.id} className={s.item}>
              <span>{index + 1}</span>
              <div className={cn(s.inputRow, errorField && s.error)}>
                <ResizableTextarea
                  name={`${label}.${index}.${keysPattern[0]}`}
                  placeholder={`...`}
                  className={s.textarea}
                />
                <Button
                  type="button"
                  disabled={
                    fields.length === 1 &&
                    getValues(`${label}.${index}.${keysPattern[0]}`) === ''
                  }
                  onClick={() => removeInput(index)}
                  variant="ghost"
                  className="p-0 shrink-0"
                >
                  <FeatherIcon icon="minus-circle" />
                </Button>
              </div>
            </li>
          );
        })}
      </ul>
      <Button
        type="button"
        variant="ghost"
        onClick={addInput}
        className={s.button}
      >
        <FeatherIcon icon="plus-circle" className={s.iconAdd} />
        Добавить
      </Button>
    </div>
  );
};
