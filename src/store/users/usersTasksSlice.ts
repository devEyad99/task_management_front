//..
import { TLoading, ITask } from './../../types';
import { createSlice } from '@reduxjs/toolkit';
import actGetUsersTasks from './act/actGetUsersTasks';

interface TasksState {
  tasks: ITask[];
  loading: TLoading;
  error: string | null;
}

const initialState: TasksState = {
  tasks: [],
  loading: 'idle',
  error: null,
};

const usersTasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetUsersTasks.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(actGetUsersTasks.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.tasks = action.payload;
    });
    builder.addCase(actGetUsersTasks.rejected, (state, action) => {
      state.loading = 'failed';
      state.error = action.error as string;
    });
  },
});

export { actGetUsersTasks };
export default usersTasksSlice.reducer;
