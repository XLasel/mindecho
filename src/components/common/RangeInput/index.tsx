import { useFormContext } from 'react-hook-form';

import { cn } from '@/utils';

import s from './RangeInput.module.scss';

interface RangeInputProps extends React.ComponentPropsWithoutRef<'input'> {
  name: string;
  classNames?: string;
}

export const RangeInput: React.FC<RangeInputProps> = ({
  name,
  classNames,
  ...props
}) => {
  const { register, watch } = useFormContext();
  const value = watch(name);
  return (
    <div className={cn(s.root, classNames)}>
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
