import { createSlice, SerializedError } from "@reduxjs/toolkit";
import { IState } from "./types";
import {
  logIn,
  logOut,
  refreshUser,
  register,
  updateProfile,
} from "./authOperations";

const initialState: IState = {
  user: { name: "", email: "", phone: "", avatar: "" },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isAuthLoading: false,
  error: null,
};

const handleAuthPending = (state: IState) => {
  state.isAuthLoading = true;
};

const handleAuthRejected = (
  state: IState,
  action: { error: SerializedError }
) => {
  state.isAuthLoading = false;
  state.error = action.error.message ?? null;
};

export const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {},
  extraReducers(builder) {
    //register
    builder.addCase(register.pending, handleAuthPending);
    builder.addCase(register.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isAuthLoading = false;
      state.error = null;
    });
    builder.addCase(register.rejected, handleAuthRejected);
    //login
    builder.addCase(logIn.pending, handleAuthPending);
    builder.addCase(logIn.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isAuthLoading = false;
      state.error = null;
    });
    builder.addCase(logIn.rejected, handleAuthRejected);
    // profile
    builder.addCase(updateProfile.pending, handleAuthPending);
    builder.addCase(updateProfile.fulfilled, (state, { payload }) => {
      state.user = { ...state.user, ...payload.user };
      state.error = null;
    });
    builder.addCase(updateProfile.rejected, handleAuthRejected);
    //logout
    builder.addCase(logOut.pending, handleAuthPending);
    builder.addCase(logOut.fulfilled, (state) => {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLoggedIn = initialState.isLoggedIn;
      state.isAuthLoading = initialState.isAuthLoading;
      state.error = initialState.error;
    });
    builder.addCase(logOut.rejected, handleAuthRejected);
    //refresh
    builder.addCase(refreshUser.pending, (state) => {
      state.isRefreshing = true;
    });
    builder.addCase(refreshUser.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.error = null;
    });
    builder.addCase(refreshUser.rejected, (state, { payload }) => {
      state.isRefreshing = false;
      state.error = payload;
    });
  },
});

export default authSlice.reducer;
