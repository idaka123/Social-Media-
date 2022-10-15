

import { useState } from 'react';
import EditModal from '../../Components/Modal/Edit/EditModal'
import './Profile.css';
import Header from '../../Components/UserInfo/UserHeader';
import Posts from '../../Components/Posts/Posts';
import ModalPost from '../../Components/Modal/Post/ModalPost';
import NewFeed from '../../Components/NewFeed/NewFeed';




const Profile = (props) => {
    const {id} = props
    const [modalPost, setModalPost] = useState(false)
    const [edit, setEdit] = useState(false)

    return ( 
        <>
            <Header edit={edit} setEdit={setEdit} />
            { edit && <EditModal setEdit={setEdit} />}

            <div className='grid'>
                {modalPost && <ModalPost setModalPost={setModalPost}/>}
                <Posts setModalPost={setModalPost} />
                <NewFeed id={id} home={false}/>
            </div>
        </>
     
     );
}
 
export default Profile;