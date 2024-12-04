//..
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUsers } from '../../../types';
import isAxiosHandler from '../../../utils/isAxiosError';

interface TFormData {
  email: string;
  password: string;
}
interface TResponse {
  message: string;
  token: string;
  refreshToken?: string;
  user: IUsers;
}

const actAuthLogin = createAsyncThunk(
  'auth/login',
  async (formDate: TFormData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.post<TResponse>(
        'http://localhost:3001/auth/login',
        formDate
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(isAxiosHandler(error));
    }
  }
);
export default actAuthLogin;
