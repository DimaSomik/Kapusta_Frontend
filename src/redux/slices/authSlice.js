import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut } from "../controllers/authController";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        accessToken: "",
        refreshToken: "",
        sid: "",
        isLoggedIn: false,
        isLogin: false,
    },
    reducers: {
        toggleIsLogin: (state) => {
            state.isLogin = !state.isLogin
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state) => {
                state.isLogin = true
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.accessToken = action.payload.accessToken;
                state.refreshToken = action.payload.refreshToken;
                state.sid = action.payload.sid;
                state.isLoggedIn = true;
            })
            .addCase(logOut.fulfilled, (state) => {
                state.accessToken = null;
                state.refreshToken = null;
                state.sid = null;
                state.isLoggedIn = false;
                state.isLogin = false;
            })
    },
    selectors: {
        selectAccessToken: (state) => state.accessToken,
        selectRefreshToken: (state) => state.refreshToken,
        selectSID: (state) => state.sid,
        selectIsLoggedIn: (state) => state.isLoggedIn,
        selectIsLogin: (state) => state.isLogin,
    }
});

export const { toggleIsLogin } = authSlice.actions;
export const { selectAccessToken, selectRefreshToken, selectSID, selectIsLoggedIn, selectIsLogin } = authSlice.selectors;