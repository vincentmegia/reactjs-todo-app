import { createSlice } from '@reduxjs/toolkit';

export const postFormReducer = createSlice({
    name: 'postform',
    initialState: {
        posts: [],
        cachedPosts: []
    },
    reducers: {
        removePost: (state, action) => {
            state.posts = state.posts.filter(c => c.id !== action.payload.id);
            state.cachedPosts = [...state.posts];
        },
        addPost: (state, action) => {
            state.posts = [...state.posts, {
                id: action.payload.id,
                text: action.payload.text,
                title: action.payload.title,
                date: action.payload.date
            }];
            state.cachedPosts = [...state.posts];
        },
        updatePost: (state, action) => {
            const copy = [...state.posts];
            copy[action.payload.id] = {
                id: action.payload.id,
                title: action.payload.title,
                text: action.payload.text,
                date: action.payload.date
            };
            state.posts = copy;
            state.cachedPosts = [...state.posts];
        },
        filterPost: (state, action) => {
            if (action.payload.searchKey.length === 0) {
                state.posts = [...state.cachedPosts];
                return;
            }
            debugger;
            let list = [...state.posts].filter(post => post.title.indexOf(action.payload.searchKey) !== -1 || 
            post.text.indexOf(action.payload.searchKey) !== -1 );
            state.posts = list;
        }
    }
});

export const { removePost, addPost, updatePost, filterPost } = postFormReducer.actions;
export const selectPosts = state => { 
    return state.postform.posts;
}
export default postFormReducer.reducer;