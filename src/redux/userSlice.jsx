import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: 'Canh',
        liveIn: 'HCM city',
        comeFrom: 'Da Lat',
        about: 'I\'m a fullstack developer',
        avatarUrl: 'https://www.pngarts.com/files/11/Avatar-Transparent-Image.png',
        theme: '#F1AB27',
        pending: false,
        error: false
    },
    reducers: {
        updateStart(state){
            state.pending = true
            state.error = false
        },
        updateError(state){
            state.pending = false
            state.error = true
        },
        updateSuccess(state, action){
            state.name = action.payload.name
            state.liveIn = action.payload.liveIn
            state.comeFrom = action.payload.comeFrom
            state.about = action.payload.about
            state.avatarUrl = action.payload.avatarUrl
            state.theme = action.payload.theme
            state.pending = false
            state.error = false
        }
    }
})

export const { updateSuccess, updateStart, updateError } = userSlice.actions
export default userSlice.reducer