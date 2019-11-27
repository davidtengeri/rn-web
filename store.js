import { configureStore } from '@reduxjs/toolkit';
import todoSliceReducer from './screens/todoSlice';

const store = configureStore({
  reducer: todoSliceReducer,
});

export default store;
