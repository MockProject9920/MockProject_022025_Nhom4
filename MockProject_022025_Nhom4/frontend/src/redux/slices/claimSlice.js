// filepath: /MockProject_022025_Nhom4/frontend/src/redux/slices/claimSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import claimService from '../../services/claimService';

export const fetchClaims = createAsyncThunk('claims/fetchClaims', async () => {
    const response = await claimService.getClaims();
    return response.data;
});

export const createClaim = createAsyncThunk('claims/createClaim', async (claimData) => {
    const response = await claimService.createClaim(claimData);
    return response.data;
});

const claimSlice = createSlice({
    name: 'claims',
    initialState: {
        claims: [],
        loading: false,
        error: null,
    },
    reducers: {
        clearClaims: (state) => {
            state.claims = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchClaims.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchClaims.fulfilled, (state, action) => {
                state.loading = false;
                state.claims = action.payload;
            })
            .addCase(fetchClaims.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(createClaim.fulfilled, (state, action) => {
                state.claims.push(action.payload);
            });
    },
});

export const { clearClaims } = claimSlice.actions;

export default claimSlice.reducer;