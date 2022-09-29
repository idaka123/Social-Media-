import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { faImage} from '@fortawesome/free-regular-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

import './ModalPost.css'
import PostImg from './PostImg'
import { createPost } from '../../../redux/postSlice'

const ModalPost = (props) => { 
    const [importImg, setImportImg] = useState(false)
    const user = useSelector(state => state.user)
    const {setModalPost} = props
    const dispatch = useDispatch()
    const [postText, setPostText] = useState('')
    const [postImg, setPostImg] = useState('')


    const handleCloseClick = () =>{
        setModalPost(false)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        setModalPost(false)
        const newPost = {
            // userName: 'Canh',
            // userAvatar: 'https://www.pngarts.com/files/11/Avatar-Transparent-Image.png',
            postText: postText,
            postImg: postImg,
        }

        console.log(newPost);
        dispatch(createPost(newPost))

    }

return (  
        <form className='modal-post' onSubmit={handleSubmit}>
            {/* header */}
            <header className="modal_header-wrapper">
                <div className="modal_header-title">
                    Create Post
                </div>
                <div className="modal_header-close_btn-wrapper" onClick={handleCloseClick}>
                    <FontAwesomeIcon className="modal_header-close_btn" icon={faXmark}></FontAwesomeIcon>
                </div>
            </header>

            {/* content */}

            <div className="modal_content">
                <div className="modal-input-area">
                    <textarea type="text" spellCheck={false} placeholder='What are you thinking?' className="modal_content-input" onChange={(e) => setPostText(e.target.value)} />
                    { importImg &&  <PostImg 
                                    setPostImg={setPostImg}
                                    setImportImg={setImportImg} 
                                  />
                    
                    }
                </div>

                
            </div>

            {/* footer */}
            <footer className='modal-post-footer'>
                <div className="modal_content-icon">
                    <p className='modal-posts-input-title'>Add to your Post: </p>
                    <div className="modal-posts-input-fileImg" onClick={() => {setImportImg(true)}} >
                        <FontAwesomeIcon className='modal-posts-input-fileImg-icon' icon={faImage} />

                        <span className='modal-posts-input-fileImg-name'>Image</span>
                    </div>

                </div>

                <div className="modal-submit">
                    <button className="modal-submit-btn-wrapper" 
                        style={{backgroundImage: `linear-gradient(${user.theme} 50%, white 100%)` }}>
                        <p className="modal-submit-btn">Post</p>

                    </button>
                </div>
            </footer>
        </form>
    );
}
 
export default ModalPost;