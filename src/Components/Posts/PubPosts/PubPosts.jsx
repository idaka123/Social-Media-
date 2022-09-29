import './PubPosts.css'
import { useSelector } from 'react-redux';


const PubPost = (props) => {
    const { post, idx } = props
    const user = useSelector(state => state.user)

    return ( 
        <div className="PubPost" key={idx}>
            <header className="PubPost_header">
                <img className="PubPost_header-avatar" src={user.avatarUrl} alt='avatar'/>
                <p className="PubPost_header-name">{user.name}</p>
            </header>

            {/* <div className="PubPost_content"> */}
                <img src={post.postImg} alt="" className="PubPost_content-img" />            
            {/* </div> */}

            <div className='PubPost_footer'>
                <p className="PubPost_footer-des">
                    {post.postText}
                </p>
            </div>
        </div>
    );
}
 
export default PubPost;