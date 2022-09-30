import { faHouse, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';


import './User.css'

const UserAbout = () => {
    const user = useSelector(state => state.user)

    return ( 
        <div className='user-about-box-wrapper'>
            <div className='user-about-box'>
                <div className="user-about">
                    <p className='user-about-title'><b>About</b></p>
                    <div className="user-about-content">{user.about}</div>
                </div>
    
                <div className="user-about-info">
                    <div className="user-about-info-item">
                        <div className="user-about-info-icon-wrapper">
                            <FontAwesomeIcon className="user-about-info-icon" icon={faLocationDot} />
                        </div>
                        <div className="user-about-info-content">Live in <b>{user.liveIn}</b></div>
                    </div>

                    <div className="user-about-info-item">
                        <div className="user-about-info-icon-wrapper">
                            <FontAwesomeIcon className="user-about-info-icon" icon={faHouse} />
                        </div>
                        <div className="user-about-info-content">Come from <b>{user.comeFrom}</b></div>
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default UserAbout;