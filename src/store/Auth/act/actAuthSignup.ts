import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUsers } from '../../../types';
import isAxiosHandler from '../../../utils/isAxiosError';

interface TFormData {
  name: string;
  email: string;
  password: string;
  role: string;
}

interface TResponse {
  message: string;
  token: string;
  refreshToken?: string;
  user: IUsers;
}

const actAuthSignup = createAsyncThunk(
  'auth/signup',
  async (formDate: TFormData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.post<TResponse>(
        'http://localhost:3001/auth/signup',
        formDate
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(isAxiosHandler(error));
    }
  }
);

export default actAuthSignup;
