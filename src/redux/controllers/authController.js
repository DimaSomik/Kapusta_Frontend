import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setUserFromToken } from "../slices/authSlice";

axios.defaults.baseURL = "https://kapusta-fnr2.onrender.com";

export const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
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
            localStorage.setItem("token", res.data.accessToken);
            return res.data;
      } catch (error) {
            alert(error.response.data.message);
            return rejectWithValue(error.message);
      }
    }
);

export const googleLogin = createAsyncThunk(
  "auth/googleLogin",
  async (queryParams, { rejectWithValue, dispatch, getState }) => {
    try {
      const res = await axios.get(`/auth/google/callback?${queryParams}`);
      setAuthHeader(res.data.accessToken);
      localStorage.setItem("accessToken", res.data.accessToken);

      await dispatch(setUserFromToken(res.data.user));

      const state = getState();
      if (state.auth.isUserLoaded) {

        window.location.href = "/transaction/expenses";
      }

      return res.data;
    } catch (error) {
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