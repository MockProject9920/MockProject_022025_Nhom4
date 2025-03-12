import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import claimReducer from './slices/claimSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    claims: claimReducer,
  },
});

export default store;