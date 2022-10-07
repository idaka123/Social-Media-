// import { updateError, updateStart, updateSuccess, } from "./userSlice"
import {createPostStart, createPost, createPostError 
            ,destroyPost} from './postSlice'
import { loginStart, loginError, loginSuccess,
        registerStart,registerError, registerSuccess,  
        getUserStart, getUserSuccess, getUserError,
        updateUserStart, updateUserSuccess, updateUserError,
        logOutStart, logOutSuccess, logOutError, } from './authSlice'
import { getAllUsers } from './userSlice'

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
        console.log('username or password is not correct');
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


// POST 
export const Post = async (dispatch, userId, newPost) => {
    // dispatch(createPostStart())
    try{
        const res = await axios.post('/post/createPost/'+ userId, newPost)
        console.log(newPost);
        await dispatch(createPost(res.data))
    }
    catch{
        // dispatch(createPostError())
    }
}

export const deletePost = async( dispatch, postId) => {
    try{
        const id = postId
        await axios.delete('/post/deletePost/'+ id)
        dispatch(destroyPost(id))

    }
    catch{

    }
} 

export const AllUsers = async (dispatch) => {
    try{
        const res = await axios.get('/user/getAllUsers')
        console.log('dispatch in redux', res.data)
        
        dispatch(getAllUsers(res.data))
    }
    catch{

    }
}