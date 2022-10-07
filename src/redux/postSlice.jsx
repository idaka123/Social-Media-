import { createSlice } from "@reduxjs/toolkit"

export const postSlice = createSlice({
    name: 'post',
    initialState:{
        posts: []
        
    },
    reducers: {
        // createPostStart(state) {
        //     state.posts.isPending = true
        //     state.posts.isError = false
        // },
        createPost(state, action){
            // console.log(action.payload);
            state.posts = [...state.posts, action.payload]
            // state.posts.isPending = false
            // state.posts.isError = false
        },
        // createPostError(state) {
        //     state.posts.isPending = false
        //     state.posts.isError = true
        // },
        destroyPost(state, action){
            console.log(state.posts);
            state.posts = state.posts.filter( post => post._id !== action.payload )
        }
    }

}) 

export const { createPostStart, createPost, destroyPost, createPostError } = postSlice.actions
export default postSlice.reducer