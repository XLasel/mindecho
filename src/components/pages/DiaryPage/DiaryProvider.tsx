import { Outlet } from "react-router-dom";

import { ValidateSearchParams } from "@/components/common/ValidateSearchParams";
import { SearchParamsProvider } from "@/context/search";

export const DiaryProvider = () => (
  <SearchParamsProvider>
    <ValidateSearchParams>
      <Outlet />
    </ValidateSearchParams>
  </SearchParamsProvider>
);
