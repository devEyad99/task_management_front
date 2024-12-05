//..
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import isAxiosHandler from '../../../utils/isAxiosError';

const actGetAllTasks = createAsyncThunk(
  'tasks/fetchAllTasks',
  async (_, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const token = JSON.parse(localStorage.getItem('auth') || '{}').token;
      const res = await axios.get(
        'http://localhost:3001/task/getAllTasks?limit=10',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          signal,
        }
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(isAxiosHandler(error));
    }
  }
);

export default actGetAllTasks;
