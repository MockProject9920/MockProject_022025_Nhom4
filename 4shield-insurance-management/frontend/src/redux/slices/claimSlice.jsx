/* Complaint status management */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getClaims } from "../../api/claimApi";

export const fetchClaims = createAsyncThunk("claims/fetchClaims", async () => {
	const response = await getClaims();
	return response.data;
});

const claimsSlice = createSlice({
	name: "claims",
	initialState: {
		claims: [],
		status: "idle",
		loading: false,
		error: null,
	},
	reducers: {
		// Reducers for status updates, payment approvals, etc.
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchClaims.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchClaims.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.claims = action.payload;
			})
			.addCase(fetchClaims.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export default claimsSlice.reducer;
