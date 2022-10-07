import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        allUser:[],
        pending: false,
        error: false
    },
    reducers: {
        getAllUsers(state, action) {
            state.allUser = [ ...action.payload ]
        }
        
    }
})

export const { updateSuccess, updateStart, updateError, getAllUsers  } = userSlice.actions
export default userSlice.reducer