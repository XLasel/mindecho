import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { formatISO } from 'date-fns';

import { initialNotes } from '@/constants';

interface NotesState {
  notes: Note[];
}

const initialState: NotesState = {
  notes: initialNotes,
};

const noteSlice = createSlice({
  name: 'notes',
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

export default noteSlice.reducer;
