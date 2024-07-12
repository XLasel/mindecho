import { useLocation, useNavigate } from "react-router-dom";

interface UseBackNavigationResult {
  canGoBack: boolean;
  href: number | string;
  goBack: () => void;
}

// export const useBackNavigation = (
//   defaultHref: string = "/diary"
// ): UseBackNavigationResult => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const canGoBack =
//     location.key !== "default" && !location.pathname.endsWith("/edit");

//   const goBack = () => {
//     if (canGoBack) {
//       navigate(-1);
//     } else {
//       navigate(defaultHref);
//     }
//   };

//   return { canGoBack, href: canGoBack ? -1 : defaultHref, goBack };
// };

export const useBackNavigation = (
  defaultHref: string = "/diary",
): UseBackNavigationResult => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;

  const isEditPage = pathname.endsWith("/edit");
  // const isViewPage = !isEditPage && pathname.includes("/diary/");
  const isViewPage = !isEditPage && pathname.includes("/diary/");

  const canGoBack = location.key !== "default";

  const goBack = () => {
    if (isViewPage) {
      navigate(defaultHref);
      // } else if (isEditPage) {
      //   navigate(pathname.replace("/edit", ""));
    } else if (canGoBack) {
      navigate(-1);
    } else {
      navigate(defaultHref);
    }
  };

  return {
    canGoBack,
    href: isViewPage ? defaultHref : canGoBack ? -1 : defaultHref,
    // href: isViewPage ? defaultHref : canGoBack ? -1 : defaultHref,
    goBack,
  };
};
