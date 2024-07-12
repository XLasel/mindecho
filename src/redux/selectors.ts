import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Note } from "./noteSlice";

export const selectAllNotes = (state: RootState) => state.notes.notes;

export const selectFilteredNotes = createSelector(
  (state: RootState) => state.notes.notes,
  (_, props: { searchParams: string; startDate: string; endDate: string }) =>
    props,
  (notes, props) => {
    const { searchParams, startDate, endDate } = props;
    let filteredEntries = notes;

    if (searchParams) {
      filteredEntries = filteredEntries.filter((note: Note) => {
        return Object.values(note).some((value) => {
          return (
            typeof value === "string" &&
            value.toLowerCase().includes(searchParams.toLowerCase())
          );
        });
      });
    }

    if (startDate && endDate) {
      filteredEntries = filteredEntries.filter(
        (note: Note) =>
          new Date(note.date) >= new Date(startDate) &&
          new Date(note.date) <= new Date(endDate),
      );
    }

    return filteredEntries;
  },
);

// export const selectFilteredNotes = createSelector(
//   // тут selectNotes
//   (state: RootState) => state.notes.notes,
//   (_, props: { searchParams: string, startDate: string, endDate: string }) => props,
//   (notes, searchParams, startDate, endDate) => {
//     let filteredEntries = notes;

//     if (!searchParams) {
//       // console.log(`${searchParams} - 1`);
//       return notes;
//     }

//     return notes.filter((note: Note) => {
//       return Object.values(note).some((value) => {
//         console.log(`${value} + ${searchParams}`);
//         console.log(
//           typeof value === "string" &&
//             value.toLowerCase().includes(searchParams.toLowerCase())
//         );
//         return (
//           typeof value === "string" &&
//           value.toLowerCase().includes(searchParams.toLowerCase())
//         );
//       });
//     });
//   }
// );
