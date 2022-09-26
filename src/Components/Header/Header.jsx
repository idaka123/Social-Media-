import './header.css'
import { useState } from 'react';
import EditModal from '../EditModal/EditModal';
import { useSelector } from 'react-redux';

function Header() {
    const [edit, setEdit] = useState(false)
    const user = useSelector(state => state.user)

  return (
    <header>
        { edit && <EditModal setEdit={setEdit}> </EditModal>}

      <div className="header-wrapper">
        <button className="edit-btn" onClick={() => {setEdit(!edit)}}>edit</button>


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
