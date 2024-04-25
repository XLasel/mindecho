import React, { useState } from "react";

import s from "./TitleField.module.scss";
import { FieldValues, UseFormRegister } from "react-hook-form";

// interface InputTitleProps extends React.InputHTMLAttributes<HTMLInputElement>{
//     label: string
// }

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
      className={s.title}
      maxLength={22}
      autoComplete="off"
    />
  );
});
