import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './edit.css'

import { update } from '../../redux/userSlice'

function EditModal(props) {
  const { setEdit } = props
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const [name, setName] = useState('Canh')
  const [age, setAge] = useState('20')
  const [about, setAbout] = useState('I am a Fullstack Developer')
  const [avatUrl, setAvaUrl] = useState(
    'https://www.pngarts.com/files/11/Avatar-PNG-Pic.png',
  )
    
  
  const userUpdate = {
    name: name,
    age: age,
    about: about,
    avatarUrl: avatUrl
  }

  
  const avatarUrl = [
    'https://www.pngarts.com/files/11/Avatar-PNG-Pic.png',
    'https://www.pngarts.com/files/11/Avatar-Transparent-Image.png',
    'https://www.pngarts.com/files/11/Avatar-PNG-Photo.png',
    'https://www.pngarts.com/files/11/Avatar-Free-PNG-Image.png',
    'https://www.pngarts.com/files/11/Avatar-PNG-High-Quality-Image.png',
    'https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png',
    'https://www.pngarts.com/files/3/Cool-Avatar-Transparent-Images.png',
    'https://www.pngarts.com/files/11/Avatar-PNG-Download-Image.png',
  ]



  const handleSubmit = (e) => {
    e.preventDefault()
    setEdit(false)
    dispatch(update(userUpdate))

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="edit-modal">
          <header className="modal-header">
            <p className="modal-title">Edit Profile </p>
            <button className="save-btn">save</button>
          </header>

          <div className="input-info-wrapper">
            <label>Name</label>
            <input
              className="input-info"
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder={user.name}
            />

            <label>Age</label>
            <input
              className="input-info"
              type="text"
              onChange={(e) => setAge(e.target.value)}
              placeholder={user.age}
            />

            <label >About</label>
            <textarea
              className="input-info-about"
              type="text"
              placeholder={user.about}
              onChange={(e) => setAbout(e.target.value)}
            />

            <label>Profile Picture</label>
            <div className="input-profile-avatar-container">
              {avatarUrl.map((url, index) => {
                return (
                  <div className="profile-picture-selector" key={index}>
                    <img
                      className="input-profile-picture"
                      onClick={(e) => setAvaUrl(e.target.src)}
                      src={url}
                      alt="pic"
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default EditModal
