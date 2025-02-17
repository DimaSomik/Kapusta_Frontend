import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        userData: null
    },
    extraReducers: (builder) => {
        builder
    },
    selectors: {
        selectUserData: (state) => state.userData,
    }
});