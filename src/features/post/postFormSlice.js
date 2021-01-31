import { createSlice } from '@reduxjs/toolkit';

export const postFormReducer = createSlice({
    name: 'postform',
    initialState: {
        posts: []
    },
    reducers: {
        removePost: (state, action) => {
            debugger;
            state.posts = state.posts.filter(c => c.id !== action.payload.id);
        },
        addPost: (state, action) => {
            debugger;
            state.posts = [...state.posts, {
                id: action.payload.id,
                text: action.payload.text,
                title: action.payload.title
            }];
        },
        updatePost: (state, action) => {
            debugger;
            const copy = [...state.posts];
            copy[action.payload.id] = action.payload;
            state.posts = copy;
        }
    }
});

export const { removePost, addPost, updatePost } = postFormReducer.actions;
export const selectPosts = state => { 
    return state.postform.posts;
}
export default postFormReducer.reducer;