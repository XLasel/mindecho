import * as React from "react";
import clsx from "clsx";

import s from "./Search.module.scss";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { selectSearchTerm, setSearchTerm } from "@/redux/noteSearchSlice";
import { setCurrentPage } from "@/redux/paginationSlice";
import { useForm } from "react-hook-form";

export interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, type, ...props }, ref) => {
    const dispatch = useAppDispatch();
    // const searchTerm = useAppSelector(selectSearchTerm);
    const { register, handleSubmit, setValue } = useForm();

    const onSubmit = (data: { searchTerm: string }) => {
      dispatch(setSearchTerm(data.searchTerm));
      dispatch(setCurrentPage(1));
    };

    const handleReset = () => {
      dispatch(setSearchTerm(""));
      setValue("searchTerm", "");
      dispatch(setCurrentPage(1));
    };
    // React.useEffect(() => {
    //   setValue("searchTerm", searchTerm);
    // }, [searchTerm, setValue]);

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type={type}
          className={clsx(s.root, className)}
          // ref={ref}
          {...register("searchTerm")}
          {...props}
        />
        <button type="submit">Search</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
    );
  }
);
SearchInput.displayName = "SearchInput";

export { SearchInput };
