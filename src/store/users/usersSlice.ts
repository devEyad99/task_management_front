//..
import { createSlice } from '@reduxjs/toolkit';
import actGetUsers from './act/actGetUsers';

export interface IUsers {
  id: number;
  name: string;
  email: string;
  role: string;
  profile_image: string;
  createdAt: Date;
  updatedAt: Date;
}

interface IUserSlice {
  users: IUsers[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: IUserSlice = {
  users: [],
  loading: 'idle',
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetUsers.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(actGetUsers.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.users = action.payload.usersWithoutPassword;
    });
    builder.addCase(actGetUsers.rejected, (state, action) => {
      state.loading = 'failed';
      state.error = action.error as string;
    });
  },
});

export { actGetUsers, type IUserSlice };
export default usersSlice.reducer;
