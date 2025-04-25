import { configureStore } from '@reduxjs/toolkit';
import userDetailsReducer from './userDetailsSlice.jsx';

export const Store = configureStore({
  reducer: {
    userDetails: userDetailsReducer,
  },
});
