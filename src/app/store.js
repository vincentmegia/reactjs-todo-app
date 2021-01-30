import { configureStore } from '@reduxjs/toolkit';
import topNavbarReducer from '../features/navbar/topNavbarSlice';
import postFormReducer from '../features/post/postFormSlice';

export default configureStore({
    reducer: {
        counter: topNavbarReducer,
        postform: postFormReducer
    },
});
