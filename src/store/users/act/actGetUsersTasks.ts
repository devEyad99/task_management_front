import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const actGetUsersTasks = createAsyncThunk(
  'tasks/fetchUserTasks',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const token = JSON.parse(localStorage.getItem('auth') || '{}').token;

      const res = await axios.get('http://localhost:3001/user/my-tasks', {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      });

      return res.data;
    } catch (error: unknown) {
      return rejectWithValue((error as Error).message as string);
    }
  }
);
export default actGetUsersTasks;
