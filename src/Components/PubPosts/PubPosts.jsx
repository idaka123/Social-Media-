 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

import './PubPosts.css'
import { faComment, faFaceSmile, faHeart as Heart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as HeartClicked } from '@fortawesome/free-solid-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import PostOption from '../Modal/PostOption/PostOption';



const PubPost = (props) => {
    const { idx, post} = props
    const [modalOption, setModalOption] = useState(false)
    const [heartClick, setHeartClick] = useState(false)

   
    // const postData = useSelector(state => state.)
    const handleOptionClick = () => {
        // console.log(postId);
        setModalOption(true)
    }
    
    const handleHeartClick = () => {
        setHeartClick(!heartClick)
        
    }
    // console.log(post?.img?.data?.data);
    const base64String = btoa(new Uint8Array(post?.img?.data?.data).reduce(function (data, byte) {
        return data + String.fromCharCode(byte);
    }, ''));

    return ( 

        <div className="PubPost" key={idx}>

        { modalOption && <PostOption post={post} setModalOption={setModalOption}/>}
            <header className="PubPost_header">
                <a href={`/Profile/${post.userId}`} className="PubPost_header-user-info" >
                    <img className="PubPost_header-avatar" src={post.avatarUrl} alt='avatar'/>
                    <p className="PubPost_header-name">{post.name}</p>
                </a>
                
                <FontAwesomeIcon className='PubPost_header-option-icon' icon={faEllipsis} onClick={handleOptionClick}/>



            </header>

            {post.postText && 
                
                <div className="PubPost_footer-des-block">
                    <p className="PubPost_footer-des">
                        {post.postText}
                    </p>
                </div>
                }

            {/* <div className="PubPost_content"> */}
              <img src={`data:image/png;base64,${base64String}`} alt="" className="PubPost_content-img" />
            {/* </div> */}

            <div className='PubPost_footer'>

                <div className="PubPost_footer-icon-block">
                    <FontAwesomeIcon 
                        className={`PubPost_footer-icon heart ${heartClick && 'active'}`} 
                        onClick={handleHeartClick} 
                        icon={heartClick? HeartClicked : Heart} />
                    {/* <i class="fa-solid fa-heart"></i> */}
                    <FontAwesomeIcon className="PubPost_footer-icon comment" icon={faComment} />
                    {/* <FontAwesomeIcon className="PubPost_footer-icon-heart" icon={faHeart} /> */}
                </div>

                

                <div className="PubPost_footer-comment-block-wrapper">
                    <div className="PubPost_footer-comment-block">
                        <FontAwesomeIcon className='PubPost_footer-comment-icon' icon={faFaceSmile}/>

                            <input type="text" placeholder='Add comment here...' className="PubPost_footer-comment-input" />

                        <button className="PubPost_footer-comment-btn">Post</button>
                    </div>

                </div>

               
              
               

            </div>


        </div>
    );
}
 
export default PubPost;