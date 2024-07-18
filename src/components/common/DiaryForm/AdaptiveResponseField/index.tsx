import React from "react";
import { FieldArrayWithId,useFormContext } from "react-hook-form";
import FeatherIcon from "feather-icons-react";

import { Button } from "@/components/common/Button";
import { ResizableTextarea } from "@/components/common/ResizableTextarea";

import s from "./AdaptiveResponseField.module.scss";

interface AdaptiveResponseFieldProps {
  fieldArray: {
    fields: FieldArrayWithId[];
  };
}

export const AdaptiveResponseField: React.FC<AdaptiveResponseFieldProps> = ({
  fieldArray: { fields },
}) => {
  const { watch, setFocus } = useFormContext();

  const thoughts = watch("automaticThoughts") as { thought: string }[];
  const isShow =
    fields.length > 0 &&
    thoughts.some(({ thought }) => !!thought && thought.trim() !== "");

  return (
    <div className={s.root}>
      {isShow ? (
        <ul className={s.list}>
          {fields.map((field, index) => (
            <li key={field.id} className={s.item}>
              <span className={s.number}>{index + 1}</span>
              <div className={s.thought}>"{thoughts[index]?.thought}"</div>
              <ResizableTextarea
                name={`automaticThoughts.${index}.response`}
                classNames={s.response}
                placeholder={`Ответ`}
              />
            </li>
          ))}
        </ul>
      ) : (
        <Button
          type="button"
          variant="ghost"
          onClick={() => setFocus("automaticThoughts.0.thought")}
          className={s.button}
        >
          <FeatherIcon icon="arrow-up" className={s.iconAdd} />
          Сначала добавим мысль
        </Button>
      )}
    </div>
  );
};
