// import { useState } from 'react';
import { useSelector } from 'react-redux';

import './header.css'



function Header(props) {
    const { edit, setEdit ,setModalPost } = props
    const user = useSelector(state => state.user)

    const handleClickEdit = () => {
          setEdit(!edit)
          setModalPost(false)
    }
  return (
    <header>
      
      <div className="header-wrapper" style={{ backgroundImage: `linear-gradient(${user.theme} 20%, white 100%)` }}>
        <button className="edit-btn" onClick={handleClickEdit}>edit</button>


        <div className="user">
            <div className="img-wrapper">
                <img
                    className="avatar"
                    src={user.avatarUrl}
                    alt="avatar"
                />
            </div>

            <div className="info">
                <div className="name">{user.name}</div>
                <div className="age">{user.age}</div>
                <div className="about">{user.about}</div>

            </div>
        </div>
      </div>


    </header>
  )
}

export default Header
