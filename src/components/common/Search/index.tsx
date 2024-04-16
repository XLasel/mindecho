import * as React from "react";
import clsx from "clsx";

import s from "./Search.module.scss";

export interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={clsx(s.root, className)}
        ref={ref}
        {...props}
      />
    );
  }
);
SearchInput.displayName = "SearchInput";

export { SearchInput };
