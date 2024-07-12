import { useSearchParams, Navigate, Outlet } from "react-router-dom";
import { searchParamsSchema } from "@/scheme";

const ValidateSearchParams = () => {
  const [searchParams] = useSearchParams();

  const params = Object.fromEntries([...searchParams.entries()]);
  const validationResult = searchParamsSchema.safeParse(params);

  if (!validationResult.success) {
    return <Navigate to="404" replace />;
  }

  return <Outlet />;
};

export default ValidateSearchParams;
