import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProductData } from '@services/api';
import data from '@services/dataTypes';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
    const res = await fetchProductData();

    return res;
});

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        data: [] as data[],
        status: 'idle'
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(
                fetchData.fulfilled,
                (state: { status: string; data: data[] }, action) => {
                    state.status = 'succeeded';
                    state.data = action.payload as data[];
                }
            )
            .addCase(fetchData.rejected, (state) => {
                state.status = 'failed';
            });
    }
});

export default dataSlice.reducer;
