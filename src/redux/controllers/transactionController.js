import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://kapusta-fnr2.onrender.com";

export const getExpenses = createAsyncThunk(
    'transaction/getExpenses',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get("/transaction/expense");
        return response.data; 
      } catch (error) {
        return rejectWithValue(error.message); 
      }
    }
);

export const addExpense = createAsyncThunk(
    'transaction/addExpense',
    async (newExpense, { rejectWithValue }) => {
      try {
        const response = await axios.post("/transaction/expense", newExpense);
        return response.data; 
      } catch (error) {
        return rejectWithValue(error.message); 
      }
    }
);

export const getIncome = createAsyncThunk(
    'transaction/getIncome',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get("/transaction/income");
        return response.data; 
      } catch (error) {
        return rejectWithValue(error.message); 
      }
    }
);

export const addIncome = createAsyncThunk(
    'transaction/addIncome',
    async (newIncome, { rejectWithValue }) => {
      try {
        const response = await axios.post("/transaction/income", newIncome);
        return response.data; 
      } catch (error) {
        return rejectWithValue(error.message); 
      }
    }
);

export const deleteTransaction = createAsyncThunk(
    'transaction/deleteTransaction',
    async (id, { rejectWithValue }) => {
      try {
        await axios.delete(`/transaction/${id}`);
        return id; 
      } catch (error) {
        return rejectWithValue(error.message); 
      }
    }
);

export const getDataForPeriod = createAsyncThunk(
    'transaction/getDataForPeriod',
    async (date, { rejectWithValue }) => {
      try {
        const response = await axios.get("/transaction/period-data", {
            params: {
                date: date,
            }
        });
        return response.data; 
      } catch (error) {
        return rejectWithValue(error.message); 
      }
    }
);

export const getExpenseCategories = createAsyncThunk(
    'transaction/getExpenseCategories',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get("/transaction/expense-categories");
        return response.data; 
      } catch (error) {
        return rejectWithValue(error.message); 
      }
    }
);

export const getIncomeCategories = createAsyncThunk(
    'transaction/getIncomeCategories',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get("/transaction/income-categories");
        return response.data; 
      } catch (error) {
        return rejectWithValue(error.message); 
      }
    }
);