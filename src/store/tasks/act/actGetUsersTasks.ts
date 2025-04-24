import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import isAxiosHandler from '../../../utils/isAxiosError';

const actGetUsersTasks = createAsyncThunk(
  'tasks/fetchUserTasks',
  async (_, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const token = JSON.parse(localStorage.getItem('auth') || '{}').token;

      const res = await axios.get('http://localhost:3001/api/user/my-tasks', {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
        signal,
      });

      return res.data;
    } catch (error) {
      return rejectWithValue(isAxiosHandler(error));
    }
  }
);
export default actGetUsersTasks;
