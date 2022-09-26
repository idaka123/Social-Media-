import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: 'Canh',
        age: '20',
        about: 'I\'m a fullstack developer',
        avatarUrl: 'https://www.pngarts.com/files/11/Avatar-Transparent-Image.png'
    },
    reducers: {
        update: (state, action) => {
            state.name = action.payload.name
            state.age = action.payload.age
            state.about = action.payload.about
            state.avatarUrl = action.payload.avatarUrl
        }
    }
})

export const { update } = userSlice.actions
export default userSlice.reducer