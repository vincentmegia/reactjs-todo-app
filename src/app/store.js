import { configureStore } from '@reduxjs/toolkit';
import topNavbarReducer from '../features/navbar/topNavbarSlice';

export default configureStore({
  reducer: {
    counter: topNavbarReducer,
  },
});
