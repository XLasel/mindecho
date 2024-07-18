import { useContext } from "react";

import { SearchParamsContext } from "./SearchParamsContext";

export const useSearchParamsContext = () => {
  const context = useContext(SearchParamsContext);
  if (!context) {
    throw new Error(
      "useSearchParamsContext must be used within a SearchParamsProvider"
    );
  }
  return context;
};
