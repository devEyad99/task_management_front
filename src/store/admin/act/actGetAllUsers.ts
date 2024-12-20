//..
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import isAxiosHandler from '../../../utils/isAxiosError';

const actGetAllUsers = createAsyncThunk(
  'admin/fetchAllUsers',
  async (_, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const token = JSON.parse(localStorage.getItem('auth') || '{}').token;
      const response = await axios.get(
        'http://localhost:3001/user/getAllUsers',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          signal,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(isAxiosHandler(error));
    }
  }
);

export default actGetAllUsers;
