import { createSlice } from "@reduxjs/toolkit"

export const postSlice = createSlice({
    name: 'post',
    initialState:{
        posts: [
                {
                    postText: '32',
                    postImg: '321',
                    userId: '312'
                },
            ]
        
    },
    reducers: {
        // createPostStart(state) {
        //     state.posts.isPending = true
        //     state.posts.isError = false
        // },
        createPost(state, action){
            state.posts = [...state.posts, action.payload]
            // state.posts.isPending = false
            // state.posts.isError = false
        },
        // createPostError(state) {
        //     state.posts.isPending = false
        //     state.posts.isError = true
        // },
    }

}) 

export const { createPostStart, createPost, createPostError } = postSlice.actions
export default postSlice.reducer