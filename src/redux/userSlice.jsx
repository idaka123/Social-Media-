import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
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
      
        
    }
})

export const { updateSuccess, updateStart, updateError  } = userSlice.actions
export default userSlice.reducer