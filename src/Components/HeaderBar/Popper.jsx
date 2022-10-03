
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faEarthAsia, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

import Avatar from '../Avatar/Avatar'

const Popper = () => {
    const user = useSelector(state => state.user)

    return ( 
        <div className="popper">

            {/* item */}

            <div className="popper-item">
                <div className="popper-item-icon-wrapper">
                   <Avatar src={user.info.avatarUrl} />
                </div>
                <div className="popper-item-content"><strong>{user.info.name || user.info.username}</strong></div>
            </div>


            <div className="popper-item">
                <div className="popper-item-icon-wrapper">
                    <FontAwesomeIcon className="popper-item-icon" icon={faEarthAsia}/>
                </div>
                <div className="popper-item-content">Language</div>
            </div>

            <div className="popper-item">
                <div className="popper-item-icon-wrapper">
                    <FontAwesomeIcon className="popper-item-icon" icon={faMoon}/>
                </div>
                <i class="fa-regular fa-moon"></i>
                <div className="popper-item-content">Display</div>
            </div>

            <div className="popper-item" style={{borderTop: '1px solid #f0f0f0'}}>
                <div className="popper-item-icon-wrapper">
                    <FontAwesomeIcon className="popper-item-icon" icon={faRightFromBracket}/>
                </div>
                <div className="popper-item-content">Logout</div>
            </div>


        </div>
    );
}
 
export default Popper;