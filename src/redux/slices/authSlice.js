import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: {
            accessToken: null,
            refreshToken: null,
            sid: null
        },
        isLoggedIn: false,
    },
    extraReducers: (builder) => {
        builder
    },
    selectors: {
        selectUser: (state) => state.user,
        selectToken: (state) => state.token,
        selectIsLoggedIn: (state) => state.isLoggedIn
    }
});