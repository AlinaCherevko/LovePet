import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState } from "./types";
import {
  logIn,
  logOut,
  refreshUser,
  refreshUserFull,
  signup,
  updateProfile,
} from "./authOperations";

const initialState: IState = {
  user: { name: "", email: "", phone: "", avatar: "" },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isAuthLoading: false,
  noticesFavorites: [],
  noticesViewed: [],
  error: "",
};

const handleAuthPending = (state: IState) => {
  state.isAuthLoading = true;
  state.error = "";
};

const handleAuthRejected = (
  state: IState,
  action: PayloadAction<string | undefined>
) => {
  state.isAuthLoading = false;
  console.log(action);
  state.error = action.payload;
};

export const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {},
  extraReducers(builder) {
    //register
    builder.addCase(signup.pending, handleAuthPending);
    builder.addCase(signup.rejected, handleAuthRejected);
    builder.addCase(signup.fulfilled, (state, { payload }) => {
      //console.log(payload);
      state.user.name = payload.name;
      state.user.email = payload.email;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isAuthLoading = false;
      state.error = "";
    });
    //login
    builder.addCase(logIn.pending, handleAuthPending);
    builder.addCase(logIn.rejected, handleAuthRejected);
    builder.addCase(logIn.fulfilled, (state, { payload }) => {
      //console.log(payload);
      state.user.name = payload.name;
      state.user.email = payload.email;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isAuthLoading = false;
      state.error = "";
    });
    //logout
    builder.addCase(logOut.pending, handleAuthPending);
    builder.addCase(logOut.rejected, handleAuthRejected);
    builder.addCase(logOut.fulfilled, (state) => {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLoggedIn = initialState.isLoggedIn;
      state.isAuthLoading = initialState.isAuthLoading;
      state.error = initialState.error;
    });
    //current full
    // builder.addCase(refreshUserFull.pending, (state) => {
    //   //state.isRefreshing = true;
    // });
    builder.addCase(refreshUserFull.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.user.name = payload.name;
      state.user.email = payload.email;
      state.user.avatar = payload.avatar;
      state.user.phone = payload.phone;
      state.token = payload.token;
      state.noticesFavorites = payload.noticesFavorites;
      state.noticesViewed = payload.noticesViewed;
      state.isLoggedIn = true;
      // state.isRefreshing = false;
      state.error = "";
    });
    builder.addCase(refreshUserFull.rejected, (state, { payload }) => {
      //state.isRefreshing = false;
      state.error = payload;
    });

    //current
    builder.addCase(refreshUser.pending, (state) => {
      state.isRefreshing = true;
    });
    builder.addCase(refreshUser.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.user.name = payload.name;
      state.user.email = payload.email;
      state.user.avatar = payload.avatar;
      state.user.phone = payload.phone;
      state.token = payload.token;
      state.noticesFavorites = payload.noticesFavorites;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.error = "";
    });
    builder.addCase(refreshUser.rejected, (state, { payload }) => {
      state.isRefreshing = false;
      state.error = payload;
    });

    // profile
    builder.addCase(updateProfile.pending, handleAuthPending);
    builder.addCase(updateProfile.rejected, handleAuthRejected);
    builder.addCase(updateProfile.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.user.name = payload.name;
      state.user.email = payload.email;
      state.user.phone = payload.phone;
      state.user.avatar = payload.avatar;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.error = "";
    });
  },
});

export const authReducer = authSlice.reducer;
