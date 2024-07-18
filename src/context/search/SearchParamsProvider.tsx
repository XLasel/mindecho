import React, { useState } from "react";

import { SearchParamsType } from "@/scheme";

import { SearchParamsContext } from "./SearchParamsContext";

export const SearchParamsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [searchParams, setSearchParams] = useState<SearchParamsType>({});

  return (
    <SearchParamsContext.Provider value={{ searchParams, setSearchParams }}>
      {children}
    </SearchParamsContext.Provider>
  );
};
