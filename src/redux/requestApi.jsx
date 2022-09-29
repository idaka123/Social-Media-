import { updateError, updateStart, updateSuccess } from "./userSlice"
import axios from 'axios'

export const updateUser = async (user, dispatch) => {
    dispatch(updateStart())
    try{
        const res = await axios.post('/api/update', user)
        dispatch(updateSuccess(res.data))
    }
    catch{
        dispatch(updateError())
    }
}