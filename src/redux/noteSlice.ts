import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { format } from "date-fns";
import { RootState } from "./store";

interface NoteState {
  notes: Note[];
}

export interface Note {
  id: string;
  date: string;
  title: string;
  situation: string;
  automaticThoughts: string;
  emotions: string[];
  physicalSensations: string;
  behavior: string;
  discomfortLevel: number;
  cognitiveDistortions: string[];
  adaptiveResponse: string;
}

const initialState: NoteState = {
  notes: [],
};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: {
      reducer: (state, action: PayloadAction<Note>) => {
        state.notes.push(action.payload);
      },
      prepare: (note) => {
        const id = nanoid();
        const date = format(new Date(), "dd-MM-yyyy");
        return { payload: { id, date, ...note } };
      },
    },
    // addNote: (state, action: PayloadAction<Note>) => {
    //   state.notes.push(action.payload);
    // },
    updateNote: (state, action: PayloadAction<Note>) => {
      const index = state.notes.findIndex(
        (note) => note.id === action.payload.id
      );
      if (index !== -1) {
        state.notes[index] = action.payload;
      }
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
  },
});

export const { addNote, updateNote, deleteNote } = noteSlice.actions;

export const selectAllNotes = (state: RootState) => state.notes.notes;

export default noteSlice.reducer;
