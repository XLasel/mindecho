import { combineReducers, configureStore } from "@reduxjs/toolkit";
import noteReducer from "./noteSlice";
import { localStorageMiddleware, reHydrateStore } from "./api";

const rootReducer = combineReducers({ notes: noteReducer });

const store = configureStore({
  reducer: rootReducer,
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
