import { createContext } from "react";

import { SearchParamsType } from "@/scheme";

interface SearchParamsContextType {
  searchParams: SearchParamsType;
  setSearchParams: (params: SearchParamsType) => void;
}

export const SearchParamsContext = createContext<
  SearchParamsContextType | undefined
>(undefined);
