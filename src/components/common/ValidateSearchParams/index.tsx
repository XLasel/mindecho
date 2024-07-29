import { Navigate, Outlet, useSearchParams } from 'react-router-dom';

import { ROUTES } from '@/constants';
import { searchParamsSchema } from '@/scheme';

export const ValidateSearchParams = () => {
  const [searchParams] = useSearchParams();

  const params = Object.fromEntries([...searchParams.entries()]);
  const validationResult = searchParamsSchema.safeParse(params);

  if (!validationResult.success) {
    return <Navigate to={ROUTES.NOT_FOUND} replace />;
  }

  return <Outlet />;
};
