// Cấu hình Redux Store
import { configureStore } from "@reduxjs/toolkit";
import claimsReducer from "./slices/claimSlice";

const store = configureStore({
	reducer: {
		claims: claimsReducer,
	},
});

export default store;
