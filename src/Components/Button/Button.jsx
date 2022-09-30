
import './Button.css'

function Button({children, btnType, id }) {
    
    // const { primary } = props
    // const classStyle = {
    //     primary,
    //     default
    // }
    return ( 

            <button id={id} className={`btn-${btnType}`}>{children}</button>

    );
}
 
export default Button;