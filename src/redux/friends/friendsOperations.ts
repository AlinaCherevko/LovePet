import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { axios } from "../auth/authOperations";

export const getFriends = createAsyncThunk(
  "friends/getFriends",

  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/friends");
      return data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response) {
        const errorMessage = error.response.data.message;
        return thunkAPI.rejectWithValue(errorMessage);
      }
    }
  }
);
