import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { formatISO } from "date-fns";

interface NoteState {
  notes: Note[];
}

export interface Note {
  id: string;
  date: string;
  title: string;
  situation: string;
  automaticThoughts: { thought: string; response: string }[];
  emotions: { [key: string]: boolean };
  physicalSensations: string;
  behavior: string;
  discomfortLevel: number;
  cognitiveDistortions: { [key: string]: boolean };
  postComment?: string;
  newDiscomfortLevel?: number;
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
        const date = formatISO(new Date());
        return { payload: { id, date, ...note } };
      },
    },
    updateNote: (state, action: PayloadAction<Note>) => {
      const index = state.notes.findIndex(
        (note) => note.id === action.payload.id,
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

export default noteSlice.reducer;
