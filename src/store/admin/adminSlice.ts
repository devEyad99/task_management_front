//..
import { TLoading, IUsers } from '../../types';
import { createSlice } from '@reduxjs/toolkit';
import actGetAllUsers from './act/actGetAllUsers';

interface AdminState {
  allUsers: IUsers[];
  TotalPages: number;
  totalUsers: number;
  loading: TLoading;
  message: string | null;
  error: string | null;
}

const initialState: AdminState = {
  allUsers: [],
  TotalPages: 0,
  totalUsers: 0,
  loading: 'idle',
  message: null,
  error: null,
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    actClearUsersState: (state) => {
      state.allUsers = [];
      state.totalUsers = 0;
      state.TotalPages = 0;
      state.loading = 'idle';
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // get all users
    builder.addCase(actGetAllUsers.pending, (state) => {
      state.loading = 'pending';
      state.error = null;
      state.message = null;
    });
    builder.addCase(actGetAllUsers.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.error = null;
      state.message = action.payload.message;
      state.allUsers = action.payload.allUsers;
      state.totalUsers = action.payload.totalUsers;
      state.TotalPages = action.payload.TotalPages;
    });
    builder.addCase(actGetAllUsers.rejected, (state, action) => {
      state.loading = 'failed';
      state.error = action.payload as string;
      state.message = null;
    });
  },
});

export { actGetAllUsers };
export const { actClearUsersState } = adminSlice.actions;
export default adminSlice.reducer;
