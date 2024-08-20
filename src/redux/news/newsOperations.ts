import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { axios } from "../auth/authOperations";
import { INewsParams } from "./types";

export const getNews = createAsyncThunk(
  "news/getNews",

  async ({ page = 1, inputValue }: INewsParams, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/news?page=${page}&keyword=${inputValue}`
      );
      return data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response) {
        const errorMessage = error.response.data.message;
        return thunkAPI.rejectWithValue(errorMessage);
      }
    }
  }
);
