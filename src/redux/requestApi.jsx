// import { updateError, updateStart, updateSuccess, } from "./userSlice"
import { loginStart, loginError, loginSuccess,
        registerStart,registerError, registerSuccess,  
        getUserStart, getUserSuccess, getUserError,
        updateUserStart, updateUserSuccess, updateUserError,
        logOutStart, logOutSuccess, logOutError, } from './authSlice'
import axios from 'axios'

export const updateUserInfo = async (userUpdated, dispatch, id, accessToken) => {
    dispatch(updateUserStart())
    try{
        const res = await axios.post('/user/updateInfo/'+id, userUpdated,
        {
            headers: { token: `Bearer ${accessToken}` }
        })
        dispatch(updateUserSuccess(res.data))
    }
    catch{
        dispatch(updateUserError())
    }
}

export const register = async (user, dispatch) => {
    dispatch(registerStart())
    try{
        await axios.post('/authem/register', user)
        dispatch(registerSuccess())
        // navigate('/')
    }
    catch{
        dispatch(registerError())
    }
}

export const login = async (user, dispatch, navigate) => {
    dispatch(loginStart())
    try{
        const res = await axios.post('/authem/login', user)
        dispatch(loginSuccess(res.data))
        navigate('/')
    }
    catch{
        dispatch(loginError())
    }
}

export const LogOut = async (dispatch, id, accessToken, navigate) => {
    dispatch(logOutStart())
    try{
        const res = await axios.post('/authem/logout/'+id,
        {
            headers: { token: `Bearer ${accessToken}` }
        })       
        navigate('/')
        dispatch(logOutSuccess())
    }
    catch{
        dispatch(logOutError())
    }
}

export const getUser = async (dispatch, id, navigate) => {
    dispatch(getUserStart())
    try{
        const res = await axios.get('/user/getUser'+ id)
        dispatch(getUserSuccess(res.data))
        navigate(`/Profile/${id}`)
    }
    catch{
        dispatch(getUserError())
    }
}
