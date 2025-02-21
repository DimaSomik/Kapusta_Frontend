import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut } from "../controllers/authController";
import axios from "axios";

// Pobranie tokena z localStorage przy starcie aplikacji
const storedAccessToken = localStorage.getItem("accessToken") || "";
const storedRefreshToken = localStorage.getItem("refreshToken") || "";
const storedSid = localStorage.getItem("sid") || "";
const isUserLoggedIn = !!storedAccessToken; // Sprawdzamy, czy token istnieje

// Ustawienie nagłówka Authorization, jeśli jest token
if (storedAccessToken) {
  axios.defaults.headers.common.Authorization = `Bearer ${storedAccessToken}`;
}

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: storedAccessToken,
    refreshToken: storedRefreshToken,
    sid: storedSid,
    isLoggedIn: isUserLoggedIn,
    isLogin: false,
    isUserLoaded: false,
  },
  reducers: {
    toggleIsLogin: (state) => {
      state.isLogin = !state.isLogin;
    },
    setUserFromToken: (state, action) => {
      state.user = action.payload;
      state.isUserLoaded = true; // Ustawiamy dane użytkownika z tokenu
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state) => {
        state.isLogin = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.sid = action.payload.sid;
        state.isLoggedIn = true;

        // Zapisywanie tokenów w localStorage
        localStorage.setItem("accessToken", action.payload.accessToken);
        localStorage.setItem("refreshToken", action.payload.refreshToken);
        localStorage.setItem("sid", action.payload.sid);

        // Ustawienie tokena w nagłówku
        axios.defaults.headers.common.Authorization = `Bearer ${action.payload.accessToken}`;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.accessToken = "";
        state.refreshToken = "";
        state.sid = "";
        state.isLoggedIn = false;
        state.isLogin = false;
        state.user = null;

        // Czyszczenie localStorage
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("sid");

        // Usunięcie tokena z nagłówka
        axios.defaults.headers.common.Authorization = "";
      });
  },
  selectors: {
    selectAccessToken: (state) => state.accessToken,
    selectRefreshToken: (state) => state.refreshToken,
    selectSID: (state) => state.sid,
    selectIsLoggedIn: (state) => state.isLoggedIn,
    selectIsLogin: (state) => state.isLogin,
  },
});

export const { toggleIsLogin, setUserFromToken } = authSlice.actions;
export const {
  selectAccessToken,
  selectRefreshToken,
  selectSID,
  selectIsLoggedIn,
  selectIsLogin,
} = authSlice.selectors;
