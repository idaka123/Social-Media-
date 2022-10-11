

import { useState } from 'react';
import { useSelector} from 'react-redux';

import EditModal from '../../Components/Modal/Edit/EditModal'
import './Profile.css';
import Header from '../../Components/UserInfo/UserHeader';
import Posts from '../../Components/Posts/Posts';
import ModalPost from '../../Components/Modal/Post/ModalPost';
import PubPost from '../../Components/PubPosts/PubPosts'
import { useContext } from 'react';
import { UserContext } from '../../App';




const Profile = (props) => {
    const { modalPost, setModalPost } = props
    let postsOption = useSelector(state => state.post)
    const [edit, setEdit] = useState(false)
    const { user } = useContext(UserContext)
    const newPosts = [...postsOption.posts].reverse()


    return ( 
        <>

         {/* profile */}
            <Header edit={edit} setEdit={setEdit} ></Header>
            { edit && <EditModal setEdit={setEdit} />}

            <div className='grid'>
                {modalPost? <ModalPost modalPost={modalPost} setModalPost={setModalPost}/>: <Posts modalPost={modalPost} setModalPost={setModalPost} />}
                
            { 
               newPosts.map((post, idx) => {

                if(user?._id === post.userId && post.userId !== undefined)
                 return (<PubPost key={idx} postsOption={postsOption} post={post}/>)

            } )
            
            }
            </div>
        </>
     
     );
}
 
export default Profile;