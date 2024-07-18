import React from "react";
import {
  ArrayPath,
  FieldArray,
  FieldValues,
  UseFieldArrayReturn,
  useFormContext,
} from "react-hook-form";
import FeatherIcon from "feather-icons-react";

import { Button } from "@/components/common/Button";
import { ResizableTextarea } from "@/components/common/ResizableTextarea";

import s from "./DynamicInputForm.module.scss";

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
  const { setValue } = useFormContext();
  const { fields, append, remove } = fieldArray;
  const keysPattern = Object.keys(pattern);

  const addInput = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    append(pattern as FieldArray<T, K>);
  };

  const removeInput = (
    event: React.MouseEvent<HTMLButtonElement>,
    index: number,
  ) => {
    event.preventDefault();
    if (fields.length === 1) {
      setValue(`${label as string}.${index}.${keysPattern[0]}`, "");
    } else {
      remove(index);
    }
  };

  return (
    <div className={s.root}>
      <ul className={s.list}>
        {fields.map((field, index) => (
          <li key={field.id} className={s.item}>
            <span>{index + 1}</span>
            <div className={s.inputRow}>
              <ResizableTextarea
                name={`${label}.${index}.${keysPattern[0]}`}
                placeholder={`...`}
                classNames={s.textarea}
              />
              <button onClick={(event) => removeInput(event, index)}>
                <FeatherIcon icon="minus-circle" className={s.iconDelete} />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <Button variant="ghost" onClick={addInput} className={s.button}>
        <FeatherIcon icon="plus-circle" className={s.iconAdd} />
        Добавить
      </Button>
    </div>
  );
};
