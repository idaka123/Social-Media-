import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../redux/requestApi';
import Profile from './Profile'

const ProfileWrap = async () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    // const id = '633ab7d97684910fd1cc7de0'
    // await getUser(dispatch, id, navigate)
    // const user = await useSelector(state => state.auth.login?.currentUser)

    return ( 
        <>
            <Profile/>
        </>
     );
}
 
export default ProfileWrap;