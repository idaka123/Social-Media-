

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import EditModal from '../../Components/Modal/Edit/EditModal'
import './Profile.css';
import Header from '../../Components/UserInfo/UserHeader';
import Posts from '../../Components/Posts/Posts';
import ModalPost from '../../Components/Modal/Post/ModalPost';
import PubPost from '../../Components/Posts/PubPosts/PubPosts'
import { getUser } from '../../redux/requestApi';



const Profile = (props) => {

    // const pending = useSelector(state => state.auth.user.info.pending)
    // const error = useSelector(state => state.auth.user.info.error)
    
    const user = useSelector(state => state.auth.login.currentUser)
    const posts = useSelector(state => state.post.posts)
    console.log(posts);
    const [edit, setEdit] = useState(false)
    const [modalPost, setModalPost] = useState(false)

    
    return ( 
        <>
         {/* profile */}
            <Header edit={edit} setEdit={setEdit} setModalPost={setModalPost}></Header>
            { edit && <EditModal setEdit={setEdit} />}
            {/* { pending && <p>loading....</p> }
            { !pending && error && <p>Error</p> } */}

            <div className='grid'>
                {modalPost? <ModalPost setModalPost={setModalPost}/>: <Posts setModalPost={setModalPost}/>}
                
            { 
               posts.slice(1).map((post, idx) => {
                    
                if(user?._id === post.userId)
                 return (<PubPost key={idx} post={post}/>)

            } )
            
            }
            </div>
        </>
     
     );
}
 
export default Profile;