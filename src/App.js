import { createContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import { createContext } from 'react';

import './App.css';
import HBar from './Components/HeaderBar/HBar';
import HLoggedIn from './Components/HeaderBar/HLoggedIn';
import LoginModal from './Components/Modal/Login/LoginModal';
import RegisterModal from './Components/Modal/Register/RegisterModal';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
// import ProfileWrap from './Pages/Profile/ProfileWrap';

export const UserContext = createContext()

function App() {
  const currentUser = useSelector(state => state.auth.login?.currentUser )
  // const getUser = useSelector(state => state.auth.user?.getUser)
  const [logModal, setLogModal] = useState(false)
  const [registerModal, setRegisterModal] = useState(false)
  const [modalPost, setModalPost] = useState(false)
  const users = useSelector(state => state.user.allUser)
 
  
  


  return (
   <Router> 

    {/* NAV BAR */}
      {logModal && !registerModal && <LoginModal 
                                        setLogModal={setLogModal} 
                                        setRegisterModal={setRegisterModal} />}
      {registerModal && !logModal && <RegisterModal 
                                        setRegisterModal={setRegisterModal}
                                        setLogModal={setLogModal} />}
                                        
      {currentUser? <HLoggedIn />:<HBar 
                                setRegisterModal={setRegisterModal} 
                                setLogModal={setLogModal}/>}
{/* <HBar 
                                setRegisterModal={setRegisterModal} 
                                setLogModal={setLogModal}/> */}
      <div className='App'>


          <Routes>
            <Route path='/'          
              element={<Home modalPost={modalPost} setModalPost={setModalPost} users={users}/>} />

              {
                users.map((user, idx) => {
                  const value = {
                    user,
                    modalPost
                  }

                  return( 
                  <Route 
                      key={idx}
                      path={`/Profile/${user._id}`} 
                      element={
                               <UserContext.Provider value={value}>
                                  <Profile modalPost={modalPost} setModalPost={setModalPost} />
                               </UserContext.Provider>
                              } 
                  />
                )})
              }
           
  
          </Routes>

        
      </div>      

   </Router>
  );
}

export default App;
