import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './Reducers/DataSlice';
import selectDataReducer from './Reducers/SelectDataSlice';

const store = configureStore({
  reducer: {
    data: dataReducer,
    selectData: selectDataReducer
  }
});

export default store;
