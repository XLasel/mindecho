import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PaginationState {
  pageSize: number;
  currentPage: number;
  itemsPerPage: number;
}

const initialState: PaginationState = {
  pageSize: 10,
  currentPage: 1,
  itemsPerPage: 10,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPageSize(state, action: PayloadAction<number>) {
      state.pageSize = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setItemsPerPage(state, action: PayloadAction<number>) {
      state.itemsPerPage = action.payload;
    },
  },
});

export const { setPageSize, setCurrentPage, setItemsPerPage } =
  paginationSlice.actions;
export default paginationSlice.reducer;
