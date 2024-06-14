import { useLocation, useNavigate } from "react-router-dom";

interface UseBackNavigationResult {
  canGoBack: boolean;
  href: number | string;
  goBack: () => void;
}

export const useBackNavigation = (
  defaultHref: string = "/diary"
): UseBackNavigationResult => {
  const location = useLocation();
  const navigate = useNavigate();
  const canGoBack = location.key !== "default";

  const goBack = () => {
    if (canGoBack) {
      navigate(-1);
    } else {
      navigate(defaultHref);
    }
  };

  return { canGoBack, href: canGoBack ? -1 : defaultHref, goBack };
};
