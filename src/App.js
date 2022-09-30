import { useState } from 'react';
import { useSelector } from 'react-redux';

import EditModal from './Components/EditModal/EditModal'
import './App.css';
import Header from './Components/UserInfo/UserHeader';
import Posts from './Components/Posts/Posts';
import ModalPost from './Components/Posts/ModalPost/ModalPost';
import PubPost from './Components/Posts/PubPosts/PubPosts'
import ModalOption from './Components/Posts/ModalOption/ModalOption';
import HeaderBar from './Components/HeaderBar/HBar';

function App() {
  const [edit, setEdit] = useState(false)
  const [modalPost, setModalPost] = useState(false)
  const [loggedin, setLoggedin] = useState(false)
  const pending = useSelector(state => state.user.pending)
  const error = useSelector(state => state.user.error)
  const posts = useSelector(state => state.post.posts)
  // console.log(posts);


  return (
   <> 
      
      {loggedin? <></>:<HeaderBar />}
      <Header edit={edit} setEdit={setEdit} setModalPost={setModalPost}></Header>


        { edit && <EditModal setEdit={setEdit}> </EditModal>}
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
