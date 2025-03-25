import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "./features/transactionSlice";

const store = configureStore({
  reducer: {
    transactions: transactionReducer,
  },
});

export default store;
