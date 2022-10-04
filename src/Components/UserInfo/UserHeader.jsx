// import { useState } from 'react';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';

import './User.css'
import UserAbout from './UserAbout';



function Header(props) {
    const { edit, setEdit ,setModalPost} = props
    const user = useSelector(state => state.auth.login.currentUser)

    const handleClickEdit = () => {
          setEdit(!edit)
          setModalPost(false)
    }
  return (
    <header>
      
      <div className="header-wrapper" style={{ backgroundImage: `linear-gradient(${user.info.theme} 20%, white 100%)` }}>
      

        <div className="user">
            <div className="img-wrapper">
                <img
                    className="user_avatar"
                    src={user.info.avatarUrl}
                    alt="avatar"
                />
            </div>
        </div>

      </div>

      <div className="user-control">
          <div className="user-info">
            <div className="name">{user.info.name}</div>
            
          {user.accessToken && <button className="edit-btn" onClick={handleClickEdit}>
              <FontAwesomeIcon className='edit-btn-icon' icon={faPenToSquare}/>
              Edit Profile
            </button>}

          </div>
            
      </div>


      {(user.info.about || user.info.liveIn || user.info.comeFrom )&& <UserAbout />}

    </header>
  )
}

export default Header
