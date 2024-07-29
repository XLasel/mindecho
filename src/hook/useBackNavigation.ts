import { useLocation, useNavigate } from 'react-router-dom';

import { ROUTES } from '@/constants';

export type UseBackNavigationProps = string | undefined;

interface UseBackNavigationResult {
  canGoBack: boolean;
  href: number | string;
  goBack: () => void;
}

export const useBackNavigation = (
  defaultHref: UseBackNavigationProps = ROUTES.DIARY
): UseBackNavigationResult => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;

  const isEditPage = pathname.endsWith('/edit');
  const isViewPage = !isEditPage && pathname.includes('/diary/');

  const canGoBack = location.key !== 'default';

  const goBack = () => {
    if (isViewPage) {
      navigate(defaultHref);
    } else if (canGoBack) {
      navigate(-1);
    } else {
      navigate(defaultHref);
    }
  };

  return {
    canGoBack,
    href: isViewPage ? defaultHref : canGoBack ? -1 : defaultHref,
    goBack,
  };
};
