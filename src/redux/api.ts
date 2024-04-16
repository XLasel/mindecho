import { Middleware } from "@reduxjs/toolkit";

import { RootState } from "@redux/store";

export const reHydrateStore = () => {
  const storedState = localStorage.getItem("reduxState");
  if (storedState !== null) {
    return JSON.parse(storedState);
  }
};

export const localStorageMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    const result = next(action);
    localStorage.setItem("reduxState", JSON.stringify(store.getState()));
    return result;
  };
