import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState } from "./types";
import { logIn, logOut, refreshUser, signup } from "./authOperations";

const initialState: IState = {
  user: { name: "", email: "", phone: "", avatar: "" },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isAuthLoading: false,
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
      console.log(payload);
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
    //refresh
    builder.addCase(refreshUser.pending, (state) => {
      state.isRefreshing = true;
    });
    builder.addCase(refreshUser.fulfilled, (state, { payload }) => {
      state.user.name = payload.name;
      state.user.email = payload.email;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.error = "";
    });
    builder.addCase(refreshUser.rejected, (state, { payload }) => {
      state.isRefreshing = false;
      //console.log(payload);
      state.error = payload;
    });
    // profile
    // builder.addCase(updateProfile.pending, handleAuthPending);
    // builder.addCase(updateProfile.rejected, handleAuthRejected);
    // builder.addCase(updateProfile.fulfilled, (state, { payload }) => {
    //   state.user = { ...state.user, ...payload.user };
    //   state.error = "";
    // });
  },
});

export default authSlice.reducer;
