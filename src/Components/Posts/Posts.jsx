// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faImage } from '@fortawesome/free-regular-svg-icons'
import { useSelector } from 'react-redux'
import './post.css'
import Avatar from '../Avatar/Avatar'
import { useContext } from 'react'
import { UserContext } from '../../App'

const Posts = (props) => {
    const { modalPost, setModalPost } = props
    const { user } = useContext(UserContext)
    const currentUser = useSelector(state => state.auth.login?.currentUser)
    let ownUser = true

    if(currentUser?._id !== user._id) {
        ownUser = false
    }
    const handleInputClick = () => {
        setModalPost(true)
    }

    return ( 

        <div className="posts-content">

            
            {   ownUser &&                
                <div className="posts-input-wrapper">
                {/* Header input */}
                <div className="posts-input-header">
                    
                    <div className="po sts-avatar-wrapper">
                        <img className="posts-avatar" src={user.info.avatarUrl} alt="avatar" />
                    </div>

                    {/* <Avatar src={user.info.avatarUrl} classStyles="posts-avatar-wrapper"/> */}

                    <div className="posts-input-content" onClick={handleInputClick}>
                        <p className="posts-input" >{`Hey ${user.info.name}, Wanna post something?`}</p>
                    </div>

                </div>
                {/* img input */}
                <div className="posts-input-body">

                   
                </div>

            </div>}

        </div>
        
     );
}
 
export default Posts;