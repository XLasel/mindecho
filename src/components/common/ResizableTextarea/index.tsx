import React, { useState, useEffect, useRef } from "react";
import { useFormContext, RegisterOptions } from "react-hook-form";

import { cn } from "@/lib/utils";

import s from "./ResizableTextarea.module.scss";

const maxHeight = 150;
const minHeight = 0;

type ResizableTextareaProps = {
  name: string;
  placeholder?: string;
  classNames?: string;
};

export const ResizableTextarea: React.FC<
  React.ComponentPropsWithoutRef<"textarea"> & ResizableTextareaProps
> = ({ name, placeholder, classNames, ...props }) => {
  const { register, getValues, setValue } = useFormContext();
  const [init, setInit] = useState(true);
  const [text, setText] = useState<string>(getValues(name) || "");
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const { ref, ...rest } = register(name, {
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange(e),
  } as RegisterOptions);

  useEffect(() => {
    const offsetBorder = 2;
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
      const scrollHeight = textArea.scrollHeight;
      if (scrollHeight > maxHeight) {
        textArea.style.height = `${maxHeight}px`;
      } else {
        textArea.style.height = `${scrollHeight + offsetBorder}px`;
      }
    }
  }, [text, init]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setText(value);
    setValue(name, value);
  };

  return (
    <textarea
      {...rest}
      name={name}
      ref={(e) => {
        ref(e);
        textAreaRef.current = e;
      }}
      placeholder={placeholder}
      className={cn(s.root, classNames)}
      {...props}
    />
  );
};
