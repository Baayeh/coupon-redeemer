import { configureStore } from '@reduxjs/toolkit';
import couponApi from './coupons/couponSlice';

export const store = configureStore({
  reducer: {
    coupons: couponApi,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
