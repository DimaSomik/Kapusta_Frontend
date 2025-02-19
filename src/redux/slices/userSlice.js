import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut } from "../controllers/authController";
import { updateBalance, deleteTransaction, getExpenses, addExpense, getIncome, addIncome } from "../controllers/userController";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        email: null,
        balance: 0,
        id: null,
        transactions: [],
        montlyStats: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(logIn.fulfilled, (state, action) => {
                state.email = action.payload.userData.email;
                state.balance = action.payload.userData.balance;
                state.id = action.payload.userData.id;
                state.transactions = action.payload.userData.transactions;
            })
            .addCase(logOut.fulfilled, (state) => {
                state.email = null;
                state.balance = 0;
                state.id = null;
                state.transactions = [];
            })
            .addCase(updateBalance.fulfilled, (state, action) => {
                state.balance = action.payload.newBalance;
            })
            .addCase(deleteTransaction.fulfilled, (state, action) => {
                const newRecords = [...state.transactions];
                const index = newRecords.findIndex((record) => record._id === action.payload.id);
                if (index !== -1) {
                newRecords.splice(index, 1);
                };
                state.transactions = newRecords;
                state.balance = action.payload.newBalance;
            })
            .addCase(getExpenses.fulfilled, (state, action) => {
                state.montlyStats = action.payload.monthsStats;
            })
            .addCase(getIncome.fulfilled, (state, action) => {
                state.montlyStats = action.payload.monthsStats;
            })
            .addCase(addExpense.fulfilled, (state, action) => {
                state.transactions.push(action.payload.transaction)
                state.balance = action.payload.newBalance
            })
            .addCase(addIncome.fulfilled, (state, action) => {
                state.transactions.push(action.payload.transaction)
                state.balance = action.payload.newBalance
            })
    },
    selectors: {
        selectUserEmail: (state) => state.email,
        selectUserBalance: (state) => state.balance,
        selectUserID: (state) => state.id,
        selectUserTransactions: (state) => state.transactions,
        selectUserMonthlyStats: (state) => state.montlyStats,
    }
});

export const { 
    selectUserEmail,
    selectUserBalance, 
    selectUserID, 
    selectUserTransactions, 
    selectUserMonthlyStats } = userSlice.selectors;