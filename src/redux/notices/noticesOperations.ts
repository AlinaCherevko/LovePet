import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { INoticesParams } from "./types";
import { axios } from "../auth/authOperations";

//get all notices
export const getNotices = createAsyncThunk(
  "notices/getNotices",

  async ({ page = 1, inputValue }: INoticesParams, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/notices?page=${page}&keyword=${inputValue}`
      );
      //console.log(data);

      return data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response) {
        const errorMessage = error.response.data.message;
        return thunkAPI.rejectWithValue(errorMessage);
      }
    }
  }
);

//get one notices
export const getOneNotice = createAsyncThunk(
  "notices/getOneNotice",

  async (id: string, thunkAPI) => {
    try {
      const { data } = await axios.get(`/notices/${id}`);
      //console.log(data);

      return data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response) {
        const errorMessage = error.response.data.message;
        return thunkAPI.rejectWithValue(errorMessage);
      }
    }
  }
);

//get all species
export const getNoticesSpecies = createAsyncThunk(
  "notices/getNoticesSpecies",

  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/notices/species");
      //console.log(data);

      return data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response) {
        const errorMessage = error.response.data.message;
        return thunkAPI.rejectWithValue(errorMessage);
      }
    }
  }
);

//get all sex
export const getNoticesSex = createAsyncThunk(
  "notices/getNoticesSex",

  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/notices/sex");
      //console.log(data);

      return data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response) {
        const errorMessage = error.response.data.message;
        return thunkAPI.rejectWithValue(errorMessage);
      }
    }
  }
);

//get all categories
export const getNoticesCategories = createAsyncThunk(
  "notices/getNoticesCategories",

  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/notices/categories");
      //console.log(data);

      return data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response) {
        const errorMessage = error.response.data.message;
        return thunkAPI.rejectWithValue(errorMessage);
      }
    }
  }
);

//get all locations
export const getLocations = createAsyncThunk(
  "notices/getLocations",

  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/cities/");
      //console.log(data);

      return data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response) {
        const errorMessage = error.response.data.message;
        return thunkAPI.rejectWithValue(errorMessage);
      }
    }
  }
);

// add one notice
export const addNotice = createAsyncThunk(
  "notices/addNotice",

  async (id: string, thunkAPI) => {
    try {
      const { data } = await axios.get(`/notices/favorites/add/${id}`);
      console.log(data);

      return data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response) {
        const errorMessage = error.response.data.message;
        return thunkAPI.rejectWithValue(errorMessage);
      }
    }
  }
);

// remove one notice
export const removeNotice = createAsyncThunk(
  "notices/removeNotice",

  async (id: string, thunkAPI) => {
    try {
      const { data } = await axios.get(`/notices/favorites/remove/${id}`);
      console.log(data);

      return data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response) {
        const errorMessage = error.response.data.message;
        return thunkAPI.rejectWithValue(errorMessage);
      }
    }
  }
);
