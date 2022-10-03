import './Avatar.css'

const Avatar = (props) => {
    const { src, classStyles } = props
    return (  
        <div className={`avatar-wrapper ${classStyles}`}>
                <img src={src} className="avatar"alt="" />
        </div>
    );
}
 
export default Avatar;