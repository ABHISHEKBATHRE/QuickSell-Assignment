import { createSlice } from '@reduxjs/toolkit';
import { selectData } from '../Actions/DataAction';

const selectDataSlice = createSlice({
  name: 'selectData',
  initialState: {
    loading: false,
    selectedData: [],
    user: false,
    message: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(selectData.pending, (state) => {
        state.loading = true;
        state.selectedData = [];
      })
      .addCase(selectData.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedData = action.payload.selectedData;
        state.user = action.payload.user;
      })
      .addCase(selectData.rejected, (state, action) => {
        state.loading = false;
        state.selectedData = [];
        state.message = action.error.message;
      });
  },
});

export default selectDataSlice.reducer;
