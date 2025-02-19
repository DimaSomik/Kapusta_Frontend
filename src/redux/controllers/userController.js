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

export const getExpenses = createAsyncThunk(
  'user/getExpenses',
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
  'user/addExpense',
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
  'user/getIncome',
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
  'user/addIncome',
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
  'user/deleteTransaction',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/transaction/${id}`);
      return {
        newBalance: response.data.newBalance,
        id: id
      }; 
    } catch (error) {
      return rejectWithValue(error.message); 
    }
  }
);

export const getDataForPeriod = createAsyncThunk(
  'user/getDataForPeriod',
  async (date, { rejectWithValue }) => {
    try {
      const response = await axios.get("/transaction/period-data", {
          params: {
              date: date,
          }
      });
      return response.data; 
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message); 
    }
  }
);

export const getExpenseCategories = createAsyncThunk(
  'user/getExpenseCategories',
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
  'user/getIncomeCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/transaction/income-categories");
      return response.data; 
    } catch (error) {
      return rejectWithValue(error.message); 
    }
  }
);