 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

import './PubPosts.css'
import { faComment, faFaceSmile, faHeart as Heart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as HeartClicked } from '@fortawesome/free-solid-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import PostOption from '../Modal/PostOption/PostOption';
import { useSelector } from 'react-redux';




const PubPost = (props) => {
    const { id, post} = props
    const [modalOption, setModalOption] = useState(false)
    const [heartClick, setHeartClick] = useState(false)
    const currentUser = useSelector(state => state.auth.login?.currentUser )
    const handleOptionClick = () => {
        setModalOption(true)
    }
    
    const handleHeartClick = () => {
        setHeartClick(!heartClick)
    }

    return ( 

        <div className="PubPost" key={id}>

        { modalOption && <PostOption post={post} setModalOption={setModalOption}/>}
            <header className="PubPost_header">
                <a href={`/Profile/${post?.userId}`} className="PubPost_header-user-info" >
                    <img className="PubPost_header-avatar" src={post?.avatarUrl} alt='avatar'/>
                    <p className="PubPost_header-name">{post?.name}</p>
                </a>
                
            {currentUser?._id === post?.userId && 
                <FontAwesomeIcon 
                    className='PubPost_header-option-icon' 
                    icon={faEllipsis} 
                    onClick={handleOptionClick}
                />
            }


            </header>

            {post.postText && 
                
                <div className="PubPost_footer-des-block">
                    <p className="PubPost_footer-des">
                        {post.postText}
                    </p>
                </div>
                }

            {/* <div className="PubPost_content"> */}
              <img src={post.imgUrl} alt="" className="PubPost_content-img" />
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