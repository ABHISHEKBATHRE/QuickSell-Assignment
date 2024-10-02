import { createSlice } from '@reduxjs/toolkit';
import { fetchAllData } from '../Actions/DataAction';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    loading: false,
    allTickets: [],
    allUser: [],
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllData.fulfilled, (state, action) => {
        state.loading = false;
        state.allTickets = action.payload.tickets;
        state.allUser = action.payload.users;
      })
      .addCase(fetchAllData.rejected, (state, action) => {
        state.loading = false;
        state.allTickets = [];
        state.allUser = [];
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
