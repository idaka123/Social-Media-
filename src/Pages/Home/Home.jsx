import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "../../Components/Avatar/Avatar";
import ModalPost from "../../Components/Modal/Post/ModalPost";
import PubPost from "../../Components/PubPosts/PubPosts";
import UserItem from "../../Components/UserItem/UserItem";
import { AllUsers } from "../../redux/requestApi";
import './Home.css'

const Home = (props) => {
    const { modalPost, setModalPost, users  } = props
    const postsOption = useSelector(state => state.post)
    const dispatch = useDispatch()
    

    
    const newPostList = [...postsOption.posts].reverse()
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
                      
                     return (<PubPost key={idx} postsOption={postsOption} post={post} home={true}/>)
    
                } )
                
                }
            </div>

            <div className="home-users">
                <p className="home-users-title">You May Know</p>
                <div className="home-users-list">

                    {
                        newUserList.map((user,idx) => {
                            return <UserItem 
                                        user={user}
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