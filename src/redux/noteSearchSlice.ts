import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface NoteSearchState {
  searchTerm: string;
}

const initialState: NoteSearchState = {
  searchTerm: "",
};

const noteSearchSlice = createSlice({
  name: "noteSearch",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = noteSearchSlice.actions;

export const selectSearchTerm = (state: RootState) =>
  state.noteSearch.searchTerm;

export default noteSearchSlice.reducer;
