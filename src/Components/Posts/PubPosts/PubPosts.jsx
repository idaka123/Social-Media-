import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

import './PubPosts.css'
import { faComment, faFaceSmile, faHeart as Heart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as HeartClicked } from '@fortawesome/free-solid-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import PostOption from '../../Modal/PostOption/PostOption';


const PubPost = (props) => {
    const { post, idx, postId } = props
    const [modalOption, setModalOption] = useState(false)
    const [heartClick, setHeartClick] = useState(false)

    // const user = useSelector(state => state.auth.login.currentUser)
    // const postData = useSelector(state => state.)

    const handleOptionClick = () => {
        // console.log(postId);
        setModalOption(true)
    }
    
    const handleHeartClick = () => {
        setHeartClick(!heartClick)
        
    }

    return ( 

        <div className="PubPost" key={idx}>

        { modalOption && <PostOption postId={postId} setModalOption={setModalOption}/>}
            <header className="PubPost_header">
                <div className="PubPost_header-user-info">
                    <img className="PubPost_header-avatar" src={post.avatarUrl} alt='avatar'/>
                    <p className="PubPost_header-name">{post.name}</p>
                </div>
                
                <FontAwesomeIcon className='PubPost_header-option-icon' icon={faEllipsis} onClick={handleOptionClick}/>



            </header>

            {/* <div className="PubPost_content"> */}
              {post.postImg && <img src={post.postImg} alt="" className="PubPost_content-img" />}  
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

                {post.postText && 
                
                <div className="PubPost_footer-des-block">
                    <p className="PubPost_footer-des">
                        {post.postText}
                    </p>
                </div>
                }
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