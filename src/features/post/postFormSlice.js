import { createSlice } from '@reduxjs/toolkit';

export const postFormReducer = createSlice({
    name: 'postform',
    initialState: {
        posts: []
    },
    reducers: {
        removePost: (state, action) => {
            delete state.postform.posts[action.index];
        },
        addPost: (state, action) => {
            const copy = [...state.posts];
            copy.push(action.payload);
            state.posts = copy;
        },
    }
});

export const { removePost, addPost } = postFormReducer.actions;
export const selectPosts = state => { 
    return state.postform.posts;
}
export default postFormReducer.reducer;