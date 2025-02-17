import { createSlice } from "@reduxjs/toolkit";

export const transactionSlice = createSlice({
    name: "transaction",
    initialState: {
        transactions: null
    },
    extraReducers: (builder) => {
        builder
    },
    selectors: {
        selectTransaction: (state) => state.transactions,
    }
});