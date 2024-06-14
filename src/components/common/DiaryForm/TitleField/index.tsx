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
    <input
      name={name}
      ref={ref}
      readOnly={readOnly}
      onChange={onChange}
      onBlur={handleBlur}
      onFocus={handleFocus}
      placeholder="Новая запись"
      className={s.root}
      maxLength={22}
      autoComplete="off"
    />
  );
});
