import { createSlice } from "@reduxjs/toolkit";
import {
  addNotice,
  getLocations,
  getNotices,
  getNoticesCategories,
  getNoticesSex,
  getNoticesSpecies,
  getOneNotice,
  removeNotice,
} from "./noticesOperations";
import { INoticesState } from "./types";

const initialState: INoticesState = {
  notices: {
    results: [],
    totalPages: 0,
    //perPage: 0,
  },
  notice: null,
  species: [],
  sex: [],
  categories: [],
  locations: [],
  favorites: [],
  viewed: [],
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

  reducers: {
    addToViewed(state, { payload }) {
      state.viewed.push(payload);
    },
    removeViewed(state) {
      state.viewed = [];
    },
  },
  extraReducers(builder) {
    //notices
    builder.addCase(getNotices.pending, isPending);
    builder.addCase(getNotices.rejected, isRejected);
    builder.addCase(getNotices.fulfilled, (state, { payload }) => {
      state.notices.results = payload.results;
      state.notices.totalPages = payload.totalPages;
      state.isError = false;
      state.isLoading = false;
    });
    //one notice
    builder.addCase(getOneNotice.pending, isPending);
    builder.addCase(getOneNotice.rejected, isRejected);
    builder.addCase(getOneNotice.fulfilled, (state, { payload }) => {
      state.notice = payload;
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
    //add notice
    builder.addCase(addNotice.pending, isPending);
    builder.addCase(addNotice.rejected, isRejected);
    builder.addCase(addNotice.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.favorites = payload;
      state.isError = false;
      state.isLoading = false;
    });
    //remove notice
    builder.addCase(removeNotice.pending, isPending);
    builder.addCase(removeNotice.rejected, isRejected);
    builder.addCase(removeNotice.fulfilled, (state, { payload }) => {
      //console.log(payload);
      //console.log(state.favorites);
      state.favorites = payload;
      state.isError = false;
      state.isLoading = false;
    });
  },
});

export default noticesSlice.reducer;

export const { addToViewed, removeViewed } = noticesSlice.actions;
