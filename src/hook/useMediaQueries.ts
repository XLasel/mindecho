import { useMediaQuery } from './useMediaQuery';

export const useMediaQueries = () => {
  const isDesktop = useMediaQuery('(max-width: 1280px)');
  const isTablet = useMediaQuery('(max-width: 1000px)');
  const isMobile = useMediaQuery('(max-width: 550px)');

  return { isDesktop, isTablet, isMobile };
};
