import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { axios } from "../auth/authOperations";

export const getNews = createAsyncThunk(
  "news/getNews",

  async (page: number = 1, thunkAPI) => {
    try {
      const { data } = await axios.get(`/news?page=${page}`);
      return data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response) {
        const errorMessage = error.response.data.message;
        return thunkAPI.rejectWithValue(errorMessage);
      }
    }
  }
);
