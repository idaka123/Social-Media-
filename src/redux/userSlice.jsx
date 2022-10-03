import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {

        login: {
            currentUser: null,
            isFetching: false,
            isError: false
        },
        info: {
            name: 'Canh',
            liveIn: 'HCM city',
            comeFrom: 'Da Lat',
            about: 'I\'m a fullstack developer',
            avatarUrl: 'https://www.pngarts.com/files/11/Avatar-Transparent-Image.png',
            theme: '#F1AB27',
        },
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
            state.info.name = action.payload.name
            state.info.liveIn = action.payload.liveIn
            state.info.comeFrom = action.payload.comeFrom
            state.info.about = action.payload.about
            state.info.avatarUrl = action.payload.avatarUrl
            state.info.theme = action.payload.theme
            state.pending = false
            state.error = false
        },
         // register
         registerStart(state){
            state.pending = true
            state.error = false
        },
        registerError(state){
            state.pending = false
            state.error = true
        },
        registerSuccess(state, action){
            state.username = action.payload.username
            state.password = action.payload.password
        },
        // login
        loginStart(state){
            state.login.isFetching = true
            state.login.isError = false
        },
        loginError(state){
            state.login.isFetching = false
            state.login.isError = true
        },
        loginSuccess(state, action){
            state.login.currentUser = action.payload
            state.login.isFetching = false
            state.login.isError = false
        }

    }
})

export const { 
    updateSuccess, updateStart, updateError,
    loginStart,loginError, loginSuccess,  } = userSlice.actions
export default userSlice.reducer