import { createSlice } from "@reduxjs/toolkit";
import {
  getLocations,
  getNotices,
  getNoticesCategories,
  getNoticesSex,
  getNoticesSpecies,
} from "./noticesOperations";
import { INoticesState } from "./types";

const initialState: INoticesState = {
  notices: {
    results: [],
    totalPages: 0,
    perPage: 0,
  },
  species: [],
  sex: [],
  categories: [],
  locations: [],
  isLoading: false,
  isError: false,
};

const isPending = (state: INoticesState) => {
  state.isLoading = true;
  state.isError = false;
};

const isRejected = (state: INoticesState) => {
  state.isError = true;
  state.isLoading = false;
};
export const noticesSlice = createSlice({
  name: "notices",
  initialState,

  reducers: {},
  extraReducers(builder) {
    //notices
    builder.addCase(getNotices.pending, isPending);
    builder.addCase(getNotices.rejected, isRejected);
    builder.addCase(getNotices.fulfilled, (state, { payload }) => {
      state.notices = payload;
      state.isError = false;
      state.isLoading = false;
    });

    //species
    builder.addCase(getNoticesSpecies.pending, isPending);
    builder.addCase(getNoticesSpecies.rejected, isRejected);
    builder.addCase(getNoticesSpecies.fulfilled, (state, { payload }) => {
      state.species = payload;
      state.isError = false;
      state.isLoading = false;
    });
    //sex
    builder.addCase(getNoticesSex.pending, isPending);
    builder.addCase(getNoticesSex.rejected, isRejected);
    builder.addCase(getNoticesSex.fulfilled, (state, { payload }) => {
      state.sex = payload;
      state.isError = false;
      state.isLoading = false;
    });
    //categories
    builder.addCase(getNoticesCategories.pending, isPending);
    builder.addCase(getNoticesCategories.rejected, isRejected);
    builder.addCase(getNoticesCategories.fulfilled, (state, { payload }) => {
      state.categories = payload;
      state.isError = false;
      state.isLoading = false;
    });
    //location
    builder.addCase(getLocations.pending, isPending);
    builder.addCase(getLocations.rejected, isRejected);
    builder.addCase(getLocations.fulfilled, (state, { payload }) => {
      state.locations = payload;
      state.isError = false;
      state.isLoading = false;
    });
  },
});

export default noticesSlice.reducer;
