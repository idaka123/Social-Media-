import axios from "axios"
import { useEffect, useState } from "react"
import PubPost from "../PubPosts/PubPosts"


const NewFeed = (props) => {
    const { id, home } = props
    const [posts, setPosts] = useState([])
    const getPosts = async () => {
        console.log(home);
        if(home){
            axios.get('/post/getAll')
            .then((res) => {
                setPosts(res.data)
            })
        }
        else {
            axios.get(`/post/get/${id}`)
            .then((res) => {
                setPosts(res.data)
            })
        }
    }

    useEffect(() => {
        console.log('get posts');
        getPosts()
    }, []) 

    const newPostList = [...posts].reverse()

    return (
        newPostList.map((post, idx) => {
            return (
                (id === post.userId || home) && <PubPost key={idx} id={post._id} post={post}/>
            )
            
        })
    )
    
    
}
 
export default NewFeed;