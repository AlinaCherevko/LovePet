import { createSlice } from "@reduxjs/toolkit";
import { getFriends } from "./friendsOperations";
import { IFriendsState } from "./types";

const initialState: IFriendsState = {
  friends: [],
  isLoading: false,
  isError: false,
};

export const friendsSlice = createSlice({
  name: "news",
  initialState,

  reducers: {},
  extraReducers(builder) {
    builder.addCase(getFriends.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getFriends.fulfilled, (state, { payload }) => {
      state.friends = payload;
      state.isError = false;
      state.isLoading = false;
    });
    builder.addCase(getFriends.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default friendsSlice.reducer;
