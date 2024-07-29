import { type RootState } from './store';

export const selectAllNotes = (state: RootState) => state.notesState.notes;
