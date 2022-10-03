import { 
    updateError, updateStart, updateSuccess, 
    loginStart, loginError, loginSuccess } from "./userSlice"
import axios from 'axios'

export const updateUser = async (user, dispatch) => {
    dispatch(updateStart())
    try{
        const res = await axios.post('/users', user)
        dispatch(updateSuccess(res.data))
    }
    catch{
        dispatch(updateError())
    }
}

export const login = async (user, dispatch) => {
    dispatch(loginStart())
    try{
        const res = await axios.post('/authem/login', user)
        dispatch(loginSuccess(res.data))
        // navigate('/')
    }
    catch{
        dispatch(loginError())
    }
}