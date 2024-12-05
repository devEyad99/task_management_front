//..
import { TLoading, ITask } from './../../types';
import { createSlice } from '@reduxjs/toolkit';
import actGetUsersTasks from './act/actGetUsersTasks';
import actGetAllTasks from './act/actGetAllTasks';

interface TasksState {
  tasks: ITask[];
  loading: TLoading;
  message: string | null;
  error: string | null;
}

const initialState: TasksState = {
  tasks: [],
  loading: 'idle',
  message: null,
  error: null,
};

const usersTasksSlice = createSlice({
  name: 'usersTasks',
  initialState,
  reducers: {
    actClearTasks: (state) => {
      state.tasks = [];
      state.loading = 'idle';
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // get user tasks
    builder.addCase(actGetUsersTasks.pending, (state) => {
      state.loading = 'pending';
      state.error = null;
      state.message = null;
    });
    builder.addCase(actGetUsersTasks.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.error = null;
      state.message = action.payload.message;
      state.tasks = action.payload;
    });
    builder.addCase(actGetUsersTasks.rejected, (state, action) => {
      state.loading = 'failed';
      state.error = action.payload as string;
      state.message = null;
    });
    // get all tasks
    builder.addCase(actGetAllTasks.pending, (state) => {
      state.loading = 'pending';
      state.error = null;
      state.message = null;
    });
    builder.addCase(actGetAllTasks.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.error = null;
      state.message = action.payload.message;
      state.tasks = action.payload.tasks;
    });
    builder.addCase(actGetAllTasks.rejected, (state, action) => {
      state.loading = 'failed';
      state.error = action.payload as string;
      state.message = null;
    });
  },
});

export { actGetUsersTasks, actGetAllTasks };
export const { actClearTasks } = usersTasksSlice.actions;
export default usersTasksSlice.reducer;
