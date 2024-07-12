import { useFormContext } from "react-hook-form";

import { cn } from "@/lib/utils";

import s from "./RangeInput.module.scss";

type RangeInputProps = {
  name: string;
  className?: string;
};

export const RangeInput: React.FC<
  React.ComponentPropsWithoutRef<"input"> & RangeInputProps
> = ({ name, className, ...props }) => {
  const { register, watch } = useFormContext();
  const value = watch(name);
  return (
    <div className={cn(s.root, className)}>
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
