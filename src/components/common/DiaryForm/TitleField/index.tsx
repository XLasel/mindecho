import React, { useState } from "react";

import s from "./TitleField.module.scss";
import { FieldValues, UseFormRegister } from "react-hook-form";

export const TitleField = React.forwardRef<
  HTMLInputElement,
  ReturnType<UseFormRegister<FieldValues>>
>(({ onChange, onBlur, name }, ref) => {
  const [readOnly, setReadOnly] = useState(true);
  console.log(readOnly);

  const handleFocus = () => {
    setReadOnly(false);
  };

  const handleBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
    if (onBlur) {
      onBlur(e);
    }
    setReadOnly(true);
  };

  return (
    <div className={s.root}>
      <input
        name={name}
        ref={ref}
        readOnly={readOnly}
        onChange={onChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        placeholder="Новая запись"
        // maxLength={22}
        autoComplete="off"
      />
    </div>
  );
});
