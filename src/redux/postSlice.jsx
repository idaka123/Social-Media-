import { createSlice } from "@reduxjs/toolkit"

export const postSlice = createSlice({
    name: 'post',
    initialState:{
        posts: [
            {
                // userName: '',
                // userAvatar: '',
                postText: '',
                postImg: '',
            },
        ]
    },
    reducers: {
        createPost( state, action){
            state.posts = [...state.posts, action.payload] 
        }
    }

}) 

export const { createPost } = postSlice.actions
export default postSlice.reducer