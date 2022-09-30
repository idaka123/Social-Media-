
import Button from "../Button/Button";
import './HeaderBar.css'

const HeaderBar = () => {

    let userState = false

    return ( 
        <div className="header_bar">

            <div className="header-logo">
                <a href="/" className="header-logo-link">Home</a>
            </div>
 
            <div className="header_bar-user_authem">
                <Button id={'register-btn'} btnType='default'>Join now</Button>
                <Button id={'login-btn'} btnType='primary'>Login</Button>
            </div>
            

        </div>
     );
}
 
export default HeaderBar;