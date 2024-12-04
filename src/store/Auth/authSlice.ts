//..
import { createSlice } from '@reduxjs/toolkit';
import actAuthLogin from './act/actAuthLogin';
import { TLoading, IUsers } from '../../types';

interface IAuthState {
  token: string | null;
  refreshToken: string | null;
  user: IUsers | null;
  message: string | null;
  loading: TLoading;
  error: string | null;
}

const initialState: IAuthState = {
  token: JSON.parse(localStorage.getItem('auth') || '{}')?.token || null,
  refreshToken:
    JSON.parse(localStorage.getItem('auth') || '{}')?.refreshToken || null,
  user: JSON.parse(localStorage.getItem('auth') || '{}')?.user || null,
  message: null,
  loading: 'idle',
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    actLogout: (state) => {
      state.token = null;
      state.refreshToken = null;
      state.user = null;
      localStorage.removeItem('auth');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actAuthLogin.pending, (state) => {
      state.loading = 'pending';
      state.error = null;
      state.message = null;
    });
    builder.addCase(actAuthLogin.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.error = null;
      state.token = action.payload?.token ?? null;
      state.refreshToken = action.payload?.refreshToken ?? null;
      state.user = action.payload?.user ?? null;
      state.message = action.payload?.message ?? null;
      // Persist data in localStorage
      localStorage.setItem(
        'auth',
        JSON.stringify({
          token: state.token,
          refreshToken: state.refreshToken,
          user: state.user,
        })
      );
    });
    builder.addCase(actAuthLogin.rejected, (state, action) => {
      state.loading = 'failed';
      state.error = action.payload as string; // Use the message from rejectWithValue
      state.message = null; // Clear success messages
    });
  },
});

export { actAuthLogin };
export const { actLogout } = authSlice.actions;
export default authSlice.reducer;
