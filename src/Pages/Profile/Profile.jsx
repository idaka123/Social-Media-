

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import EditModal from '../../Components/Modal/Edit/EditModal'
import './Profile.css';
import Header from '../../Components/UserInfo/UserHeader';
import Posts from '../../Components/Posts/Posts';
import ModalPost from '../../Components/Modal/Post/ModalPost';
import PubPost from '../../Components/Posts/PubPosts/PubPosts'
import { getUser } from '../../redux/requestApi';
import PostOption from '../../Components/Modal/PostOption/PostOption';



const Profile = (props) => {
    const { modalPost, setModalPost } = props
    // const pending = useSelector(state => state.auth.user.info.pending)
    // const error = useSelector(state => state.auth.user.info.error)
    
    const user = useSelector(state => state.auth.login.currentUser)
    let posts = useSelector(state => state.post.posts)

    const [edit, setEdit] = useState(false)
    

    const newPosts = [...posts].reverse()
    // newPosts.splice(0,1)
    console.log(newPosts);

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
               newPosts.map((post, idx) => {
                    const postId = post._id
                    
                if(user?._id === post.userId && post.userId !== undefined)
                 return (<PubPost key={idx} post={post} postId={postId} />)

            } )
            
            }
            </div>
        </>
     
     );
}
 
export default Profile;