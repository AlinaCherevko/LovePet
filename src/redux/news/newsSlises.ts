import { createSlice } from "@reduxjs/toolkit";
import { INewsState } from "./types";
import { getNews } from "./newsOperations";

const initialState: INewsState = {
  news: [],
  isLoading: false,
  isError: false,
};

export const newsSlice = createSlice({
  name: "news",
  initialState,

  reducers: {},
  extraReducers(builder) {
    builder.addCase(getNews.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getNews.fulfilled, (state, { payload }) => {
      state.news = payload.data;
      state.isError = false;
      state.isLoading = false;
    });

    builder.addCase(getNews.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default newsSlice.reducer;
