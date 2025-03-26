import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ✅ API Endpoint từ Vite `.env`
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// ✅ Lấy danh sách claims từ API
export const fetchClaims = createAsyncThunk("claims/fetchClaims", async () => {
	const response = await fetch(`${API_BASE_URL}`);
	if (!response.ok) throw new Error("Failed to fetch claims");
	return await response.json();
});

// ✅ Cập nhật claim trên server
export const updateClaim = createAsyncThunk("claims/updateClaim", async (claim) => {
	const response = await fetch(`${API_BASE_URL}/${claim.id}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(claim),
	});
	if (!response.ok) throw new Error("Failed to update claim");
	return await response.json();
});

// ✅ Xóa claim trên FE (Không xóa DB)
export const deleteClaim = createAsyncThunk("claims/deleteClaim", async (claimId, { getState }) => {
	const { claims } = getState();
	return claims.data.filter((claim) => claim.id !== claimId); // Trả về danh sách claims mới (không chứa claim bị xóa)
});

// ✅ Redux Slice
const claimsSlice = createSlice({
	name: "claims",
	initialState: { data: [], loading: false, error: null },
	reducers: {},
	extraReducers: (builder) => {
		builder
			// ✅ Fetch claims từ API
			.addCase(fetchClaims.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchClaims.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
			})
			.addCase(fetchClaims.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})

			// ✅ Update claim
			.addCase(updateClaim.fulfilled, (state, action) => {
				state.data = state.data.map((claim) =>
					claim.id === action.payload.id ? action.payload : claim
				);
			})

			// ✅ Xóa claim trên FE (không xóa DB)
			.addCase(deleteClaim.fulfilled, (state, action) => {
				state.data = action.payload; // Cập nhật danh sách claims trên FE
			});
	},
});

export default claimsSlice.reducer;
