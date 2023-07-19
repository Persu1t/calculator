import { configureStore } from '@reduxjs/toolkit';
// importing the reducer from the slice to store
import { calculatorReducer } from '../redux/calculatorSlice';

// initilization of store
export const store = configureStore({
  reducer: {
    calculatorReducer,
  },
});
