import { useState } from 'react';
import { useSelector } from 'react-redux';

import EditModal from './Components/EditModal/EditModal'
import './App.css';
import Header from './Components/Header/Header';
import Posts from './Components/Posts/Posts';
import ModalPost from './Components/Posts/ModalPost/ModalPost';
import PubPost from './Components/Posts/PubPosts/PubPosts'

function App() {
  const [edit, setEdit] = useState(false)
  const [modalPost, setModalPost] = useState(false)
  const pending = useSelector(state => state.user.pending)
  const error = useSelector(state => state.user.error)
  const posts = useSelector(state => state.post.posts)
  // console.log(posts);


  return (
   <> 
      <Header edit={edit} setEdit={setEdit} setModalPost={setModalPost}></Header>


        { edit && <EditModal setEdit={setEdit}> </EditModal>}
        { pending && <p>loading....</p> }
        { !pending && error && <p>Error</p> }

      <div className='grid'>
        {modalPost? <ModalPost setModalPost={setModalPost}/>: <Posts setModalPost={setModalPost}/>}
        
       { 
        posts.slice(1).map((post, idx) => {return <PubPost key={idx} post={post}/> } )
       
       }

        {/* <PubPost />
        <PubPost /> */}
        
      </div>




   </>
  );
}

export default App;
