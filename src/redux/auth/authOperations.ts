import { createAsyncThunk } from "@reduxjs/toolkit";
import axios1, { AxiosError } from "axios";
import { ILogin, IPet, ISignup } from "./types";
import { RootState } from "../store";

const axios = axios1.create({ baseURL: "https://petlove.b.goit.study/api" });

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common["Authorization"] = "";
};

//register
export const register = createAsyncThunk(
  "auth/register",
  async (credentials: ISignup, thunkAPI) => {
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
  }
);

//login
export const logIn = createAsyncThunk(
  "auth/signin",
  async (credentials: ILogin, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/signin", credentials);

      setAuthHeader(data.token);

      return data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response) {
        const errorMessage = error.response.data.message;
        return thunkAPI.rejectWithValue(errorMessage);
      }
    }
  }
);

//logout
export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const { data } = await axios.post("/users/signout");
    clearAuthHeader();
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
});

//update
export const updateProfile = createAsyncThunk(
  "auth/updateProfile",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.patch("/users/current/edit", credentials);
      return data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response) {
        const errorMessage = error.response.data.message;
        return thunkAPI.rejectWithValue(errorMessage);
      }
    }
  }
);

//refresh
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Faled to fetch user");
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
  }
);

//add pet
export const addPet = createAsyncThunk(
  "auth/addPet",
  async (petsData: IPet, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/current/pets/add", petsData);
      return data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response) {
        const errorMessage = error.response.data.message;
        return thunkAPI.rejectWithValue(errorMessage);
      }
    }
  }
);

//delete pet
export const deletePet = createAsyncThunk(
  "auth/deletePet",
  async (id: string, thunkAPI) => {
    try {
      await axios.delete(`/users/current/pets/remove/${id}`);
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response) {
        const errorMessage = error.response.data.message;
        return thunkAPI.rejectWithValue(errorMessage);
      }
    }
  }
);
