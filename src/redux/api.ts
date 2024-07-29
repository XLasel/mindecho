import { Middleware } from '@reduxjs/toolkit';

import { type RootState } from '@/redux/store';
import { NoteSchema } from '@/scheme';

export const reHydrateStore = () => {
  const storedState = localStorage.getItem('reduxState');
  if (storedState !== null) {
    const parsedState = JSON.parse(storedState);
    if (parsedState.notesState && Array.isArray(parsedState.notesState.notes)) {
      const validNotes = parsedState.notesState.notes.filter((note: Note) => {
        const result = NoteSchema.safeParse(note);
        if (!result.success) {
          console.error('Invalid note in localStorage', result.error);
        }
        return result.success;
      });

      return {
        ...parsedState,
        notesState: {
          ...parsedState.notes,
          notes: validNotes,
        },
      };
    }
  }
  return undefined;
};

export const localStorageMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    const result = next(action);
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
    return result;
  };
