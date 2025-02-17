import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://kapusta-fnr2.onrender.com";

const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = ``;
};

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, { rejectWithValue }) => {
        try {
            const res = await axios.post('/auth/register', credentials);
            return res.data;
        } catch (error) {
            alert(error.response.data.message); 
            return rejectWithValue(error.message);
        };
    }
);

export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
      try {
            const res = await axios.post('/auth/login', credentials);
            setAuthHeader(res.data.accessToken);
            return res.data;
      } catch (error) {
            alert(error.response.data.message);
            return rejectWithValue(error.message);
      }
    }
);

export const logOut = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
      try {
            await axios.post('/auth/logout');
            clearAuthHeader();
      } catch (error) {
            alert(error.response.data.message);
            return rejectWithValue(error.message);
      }
    }
);