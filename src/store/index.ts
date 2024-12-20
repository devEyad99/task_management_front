//..
import { configureStore } from '@reduxjs/toolkit';
import getUsersTasks from './tasks/usersTasksSlice';
import auth from './Auth/authSlice';
import admin from './admin/adminSlice';

const store = configureStore({
  reducer: {
    auth: auth,
    tasks: getUsersTasks,
    admin: admin,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
