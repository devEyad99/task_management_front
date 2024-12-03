import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const actGetUsers = createAsyncThunk('users/getUsers', async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV5YWRAZW1haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWQiOjIsImlhdCI6MTczMzE3NTg5MCwiZXhwIjoxNzMzMTc3NjkwfQ.lgrf5e05aFBAn6wSscvxgKOulb8rSd9ceJ6Z0zkIBtE';

    const res = await axios.get('http://localhost:3001/user/getAllUsers', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res.data);

    return res.data;
  } catch (error: unknown) {
    return rejectWithValue((error as Error).message as string);
  }
});
export default actGetUsers;
