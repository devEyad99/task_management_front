//..
import { configureStore } from '@reduxjs/toolkit';
import getUsersTasks from './users/usersTasksSlice';
import auth from './Auth/authSlice';

const store = configureStore({
  reducer: {
    auth: auth,
    tasks: getUsersTasks,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
