import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import isAxiosHandler from '../../../utils/isAxiosError';

const actGetAllTasks = createAsyncThunk(
  'tasks/fetchAllTasks',
  async (page: number, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const token = JSON.parse(localStorage.getItem('auth') || '{}').token;
      const res = await axios.get(
        `http://localhost:3001/task/getAllTasks?page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          signal,
        }
      );

      // Ensure data structure is correct
      return {
        tasks: res.data.tasks,
        totalTasks: res.data.totalTasks,
        totalPages: res.data.totalPages,
        message: res.data.message,
      };
    } catch (error) {
      return rejectWithValue(isAxiosHandler(error));
    }
  }
);

export default actGetAllTasks;
