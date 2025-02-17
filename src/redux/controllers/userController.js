import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://kapusta-fnr2.onrender.com";

export const getUserData = createAsyncThunk(
    'user/getUserData',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get("/user");
        return response.data; 
      } catch (error) {
        return rejectWithValue(error.message); 
      }
    }
);

export const updateBalance = createAsyncThunk(
    'user/updateBalance',
    async (balance, { rejectWithValue }) => {
      try {
        const response = await axios.patch("/user/balance", balance);
        return response.data; 
      } catch (error) {
        return rejectWithValue(error.message); 
      }
    }
);
