import { useState } from 'react';
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

function App() {
  const currentUser = useSelector(state => state.auth.login?.currentUser )
  const getUser = useSelector(state => state.auth.user?.getUser)
  const [logModal, setLogModal] = useState(false)
  const [registerModal, setRegisterModal] = useState(false)
  const id = '633ab7d97684910fd1cc7de0'

  
  


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
            <Route path='/' element={<Home />} />
            <Route path={`/Profile`} element={<Profile />} />
  
          </Routes>

        
      </div>      

   </Router>
  );
}

export default App;
