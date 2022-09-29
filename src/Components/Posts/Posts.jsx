// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faImage } from '@fortawesome/free-regular-svg-icons'
import { useSelector } from 'react-redux'
import './post.css'

const Posts = (props) => {
    const user = useSelector(state => state.user)
    const { setModalPost} = props

    const handleInputClick = () => {
        setModalPost(true)
    }

    return ( 
        <div className="posts-content">

            
            <div className="posts-input-wrapper">
                {/* Header input */}
                <div className="posts-input-header">
                    
                    <div className="posts-avatar-wrapper">
                        <img className="posts-avatar" src={user.avatarUrl} alt="avatar" />
                    </div>

                    <div className="posts-input-content" onClick={handleInputClick}>
                        <p className="posts-input" >{`Hey ${user.name}, Wanna post something?`}</p>
                    </div>

                </div>
                {/* img input */}
                <div className="posts-input-body">

                   
                </div>

            </div>

        </div>
     );
}
 
export default Posts;