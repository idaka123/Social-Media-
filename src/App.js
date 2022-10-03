import { useState } from 'react';
import { useSelector } from 'react-redux';

import EditModal from './Components/Modal/Edit/EditModal'
import './App.css';
import Header from './Components/UserInfo/UserHeader';
import Posts from './Components/Posts/Posts';
import ModalPost from './Components/Modal/Post/ModalPost';
import PubPost from './Components/Posts/PubPosts/PubPosts'
import ModalOption from './Components/Modal/Option/ModalOption';
import HBar from './Components/HeaderBar/HBar';
import HLoggedIn from './Components/HeaderBar/HLoggedIn';
import LoginModal from './Components/Modal/Login/LoginModal';
import RegisterModal from './Components/Modal/Register/RegisterModal';

function App() {
  const currentUser = useSelector(state => state.user.login.currentUser)
  const pending = useSelector(state => state.user.info.pending)
  const error = useSelector(state => state.user.info.error)
  const posts = useSelector(state => state.post.posts)

  const [edit, setEdit] = useState(false)
  const [modalPost, setModalPost] = useState(false)
  const [logModal, setLogModal] = useState(false)
  const [registerModal, setRegisterModal] = useState(false)


  
  // console.log(posts);


  return (
   <> 
      {logModal && !registerModal && <LoginModal 
                                        setLogModal={setLogModal} 
                                        setRegisterModal={setRegisterModal} />}
      {registerModal && !logModal && <RegisterModal 
                                        setRegisterModal={setRegisterModal}
                                        setLogModal={setLogModal} />}
                                        
      {currentUser? <HLoggedIn/>:<HBar 
                                setRegisterModal={setRegisterModal} 
                                setLogModal={setLogModal}/>}

      <Header edit={edit} setEdit={setEdit} setModalPost={setModalPost}></Header>
      
        { edit && <EditModal setEdit={setEdit} />}
        { pending && <p>loading....</p> }
        { !pending && error && <p>Error</p> }

      <div className='grid'>
        {modalPost? <ModalPost setModalPost={setModalPost}/>: <Posts setModalPost={setModalPost}/>}
        
       { 
          posts.slice(1).map((post, idx) => {return <PubPost key={idx} post={post}/> } )
       
       }
       <ModalOption />

        {/* <PubPost />
        <PubPost />
         */}
      </div>

      

   </>
  );
}

export default App;
