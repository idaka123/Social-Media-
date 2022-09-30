import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

import './PubPosts.css'
import { faComment, faFaceSmile, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


const PubPost = (props) => {
    const { post, idx } = props
    const [modalOption, setModalOption] = useState(false)

    const user = useSelector(state => state.user)

    const handleOptionClick = () => {

    }

    return ( 

        <div className="PubPost" key={idx}>


            <header className="PubPost_header">
                <div className="PubPost_header-user-info">
                    <img className="PubPost_header-avatar" src={user.avatarUrl} alt='avatar'/>
                    <p className="PubPost_header-name">{user.name}</p>
                </div>
                
                <FontAwesomeIcon className='PubPost_header-option-icon' icon={faEllipsis} onClick={handleOptionClick}/>

            </header>

            {/* <div className="PubPost_content"> */}
              {post.postImg && <img src={post.postImg} alt="" className="PubPost_content-img" />}  
            {/* </div> */}

            <div className='PubPost_footer'>

                <div className="PubPost_footer-des-block">
                    <p className="PubPost_footer-des">
                        {post.postText}
                    </p>
                </div>
                <div className="PubPost_footer-comment-block-wrapper">
                    <div className="PubPost_footer-comment-block">
                        <FontAwesomeIcon className='PubPost_footer-comment-icon' icon={faFaceSmile}/>

                            <input type="text" placeholder='Add comment here...' className="PubPost_footer-comment-input" />

                        <button className="PubPost_footer-comment-btn">Post</button>
                    </div>

                </div>

               
                <div className="PubPost_footer-icon-block">
                    <FontAwesomeIcon className="PubPost_footer-icon heart" icon={faHeart} />
                    <FontAwesomeIcon className="PubPost_footer-icon comment" icon={faComment} />
                    {/* <FontAwesomeIcon className="PubPost_footer-icon-heart" icon={faHeart} /> */}
                </div>
               

            </div>


        </div>
    );
}
 
export default PubPost;