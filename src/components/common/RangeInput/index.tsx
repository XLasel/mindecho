import { useFormContext } from "react-hook-form";

import s from "./RangeInput.module.scss";

type RangeInputProps = {
  name: string;
};

export const RangeInput: React.FC<
  React.ComponentPropsWithoutRef<"input"> & RangeInputProps
> = ({ name, ...props }) => {
  const { register, watch } = useFormContext();
  const value = watch(name);
  return (
    <div className={s.root}>
      <span aria-live="polite">{value}</span>
      <input
        type="range"
        min={0}
        max={10}
        {...register(`${name}`)}
        aria-valuenow={value}
        {...props}
      />
    </div>
  );
};
