import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Note } from "./noteSlice";

export const selectFilteredNotes = createSelector(
  (state: RootState) => state.notes.notes,
  (state: RootState) => state.noteSearch.searchTerm,
  (notes, searchTerm) => {
    if (!searchTerm) {
      return notes;
    }

    return notes.filter((note: Note) =>
      Object.values(note).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }
);
