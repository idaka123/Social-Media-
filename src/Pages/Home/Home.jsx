import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "../../Components/Avatar/Avatar";
import ModalPost from "../../Components/Modal/Post/ModalPost";
import PubPost from "../../Components/Posts/PubPosts/PubPosts";
import UserItem from "../../Components/UserItem/UserItem";
import { AllUsers } from "../../redux/requestApi";
import './Home.css'

const Home = (props) => {
    const { modalPost, setModalPost } = props
    const posts = useSelector(state => state.post.posts)
    const dispatch = useDispatch()
    const users = useSelector(state => state.user.allUser)

    
    const newPostList = [...posts].reverse()
    const newUserList = [...users].reverse()

    // const [userList, setUserList] =useState([])
    
    // setUserList(users)
    
    useEffect(() => {
        AllUsers(dispatch)
        console.log('dispatch get user');

    }, [])

    return (  
        <div className="home">
            

            <div className="home-posts">
            {modalPost && <ModalPost setModalPost={setModalPost}/>}
                
                { 
                   newPostList.map((post, idx) => {
                        const postId = post._id
                     return (<PubPost key={idx} post={post} postId={postId} />)
    
                } )
                
                }
            </div>

            <div className="home-users">
                <p className="home-users-title">You May Know</p>
                <div className="home-users-list">

                    {
                        newUserList.map((user,idx) => {
                            return <UserItem 
                                        key={idx}
                                        name={user.info.name} 
                                        avatarUrl={user.info.avatarUrl}
                                    />
                        })

                    }
                                       

                </div>
            </div>
            
        </div>
    );
}
 
export default Home;