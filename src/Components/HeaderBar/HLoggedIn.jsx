import { useState } from 'react';
import { useSelector } from 'react-redux';
import './HeaderBar.css'
import Popper from './Popper';

const HLoggedIn = () => {
    const user = useSelector(state => state.auth.login?.currentUser)
    const [popper, setPopper] = useState(false)



    return (
        <div className="header_bar logged">
            <div className="header-logo ">
                <a href="/" className="header-logo-link" style={{letterSpacing: '3px'}}>Home</a>
            </div>

            <div className="header_bar-avatar-wrapper">
                <img 
                    src={user.info?.avatarUrl} 
                    className="header_bar-avatar" alt="" 
                    onClick={() => setPopper(!popper)} />

                { popper && <Popper />}


            </div>



        </div>
    );
}
 
export default HLoggedIn;