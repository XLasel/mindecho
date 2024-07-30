import React, { useEffect, useRef, useState } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

import { cn } from '@/utils/helpers';

import s from './ResizableTextarea.module.scss';

const maxHeight = 150;
const minHeight = 0;

interface ResizableTextareaProps
  extends React.ComponentPropsWithoutRef<'textarea'> {
  name: string;
}

export const ResizableTextarea: React.FC<ResizableTextareaProps> = ({
  name,
  placeholder,
  className,
  ...props
}) => {
  const {
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext();
  const [init, setInit] = useState(true);
  const [text, setText] = useState<string>(getValues(name) || '');
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setText(value);
    setValue(name, value);
  };

  const { ref, ...rest } = register(name, {
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange(e),
  } as RegisterOptions);

  useEffect(() => {
    const offsetBorder = 0;
    const textArea = textAreaRef.current;

    if (textArea) {
      if (init) {
        textArea.style.minHeight = `${minHeight + offsetBorder}px`;
        if (maxHeight > minHeight) {
          textArea.style.maxHeight = `${maxHeight}px`;
        }
        setInit(false);
      }
      textArea.style.height = `${minHeight + offsetBorder}px`;
      const { scrollHeight } = textArea;
      if (scrollHeight > maxHeight) {
        textArea.style.height = `${maxHeight}px`;
      } else {
        textArea.style.height = `${scrollHeight + offsetBorder}px`;
      }
    }
  }, [text, init]);

  return (
    <textarea
      {...rest}
      name={name}
      ref={(e) => {
        ref(e);
        textAreaRef.current = e;
      }}
      placeholder={placeholder}
      className={cn(s.root, errors[name] && s.error, className)}
      {...props}
    />
  );
};
