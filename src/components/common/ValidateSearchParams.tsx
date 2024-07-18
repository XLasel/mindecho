import React, { useEffect } from "react";
import { Navigate, Outlet,useSearchParams } from "react-router-dom";

import { useSearchParamsContext } from "@/context/search";
import { searchParamsSchema } from "@/scheme";

type ValidateSearchParamsProps = {
  children: React.ReactNode;
};

// export const ValidateSearchParams = ({
//   children,
// }: ValidateSearchParamsProps) => {
export const ValidateSearchParams = () => {
  const [searchParams] = useSearchParams();
  // const { setSearchParams } = useSearchParamsContext();

  const params = Object.fromEntries([...searchParams.entries()]);
  const validationResult = searchParamsSchema.safeParse(params);

  // useEffect(() => {
  //   if (validationResult.success) {
  //     setSearchParams(validationResult.data);
  //   }
  // }, []);

  if (!validationResult.success) {
    return <Navigate to="404" replace />;
  }

  // return <>{children}</>;
  return <Outlet />;
};
