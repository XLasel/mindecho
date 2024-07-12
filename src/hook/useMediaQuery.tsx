import { useState, useEffect } from "react";

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const documentChangeHandler = () => setMatches(mediaQueryList.matches);

    mediaQueryList.addEventListener("change", documentChangeHandler);
    documentChangeHandler();

    return () => {
      mediaQueryList.removeEventListener("change", documentChangeHandler);
    };
  }, [query]);

  return matches;
};
