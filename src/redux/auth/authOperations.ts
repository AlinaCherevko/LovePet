import { createAsyncThunk } from "@reduxjs/toolkit";
import axios1, { AxiosError } from "axios";
import {
  ILogin,
  IPet,
  IRefresh,
  IRefreshFull,
  IRegData,
  ISignup,
  IUpdate,
  IUpdateReq,
} from "./types";
import { RootState } from "../store";

export const axios = axios1.create({
  baseURL: "https://petlove.b.goit.study/api",
});

export const setAuthHeader = (token: string) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
export const clearAuthHeader = () => {
  axios.defaults.headers.common["Authorization"] = "";
};

//signup
export const signup = createAsyncThunk<
  IRegData,
  ISignup,
  { rejectValue: string }
>("auth/register", async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post("/users/signup", credentials);
    setAuthHeader(data.token);
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
});

//login
export const logIn = createAsyncThunk<
  IRegData,
  ILogin,
  { rejectValue: string }
>("auth/signin", async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post("/users/signin", credentials);
    setAuthHeader(data.token);
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = error.response.data.message;
      console.log(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
});

//logout
export const logOut = createAsyncThunk<
  undefined,
  undefined,
  { rejectValue: string }
>("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/signout");
    clearAuthHeader();
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
});

//get current full
export const refreshUserFull = createAsyncThunk<
  IRefreshFull,
  undefined,
  { rejectValue: string }
>("auth/refreshFull", async (_, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const persistedToken = state.auth.token;
  if (persistedToken === null) {
    return thunkAPI.rejectWithValue("Failed to fetch user");
  }
  try {
    setAuthHeader(persistedToken);
    const { data } = await axios.get("/users/current/full");
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
});

//get current
export const refreshUser = createAsyncThunk<
  IRefresh,
  undefined,
  { rejectValue: string }
>("auth/refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const persistedToken = state.auth.token;
  if (persistedToken === null) {
    return thunkAPI.rejectWithValue("Failed to fetch user");
  }
  try {
    setAuthHeader(persistedToken);
    const { data } = await axios.get("/users/current");
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
});

//update
export const updateProfile = createAsyncThunk<
  IUpdate,
  IUpdateReq,
  { rejectValue: string }
>("auth/updateProfile", async (credentials, thunkAPI) => {
  try {
    console.log(credentials);
    const { data } = await axios.patch("/users/current/edit", credentials);
    console.log(data);
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
});

//add pet
export const addPet = createAsyncThunk<
  IRefreshFull,
  IPet,
  { rejectValue: string }
>("auth/addPet", async (petsData, thunkAPI) => {
  try {
    const { data } = await axios.post("/users/current/pets/add", petsData);
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
});

//delete pet
export const deletePet = createAsyncThunk<
  IRefreshFull,
  string,
  { rejectValue: string }
>("auth/deletePet", async (id, thunkAPI) => {
  try {
    const { data } = await axios.delete(`/users/current/pets/remove/${id}`);
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
});
