import InputBar from '../../InputBar/InputBar';
import './Register.css'
import { CloseBtn } from '../../Icon';
import Button from '../../Button/Button';

const RegisterModal = (props) => {
    const {setRegisterModal} = props 

    const handleSubmitRegister = (e) => {
        e.preventDefault()
    }

    return ( 
        <div>
            <div className="Register_modal-overlay">

                <form className="Register_modal" onSubmit={handleSubmitRegister}>
                    <header className="Register_modal-header">

                        <h3 className="Register_modal-title">Register</h3>
                        <CloseBtn 
                            classStyle={'Register_modal-close_btn'} 
                            onClick={() => setRegisterModal(false)}/>

                    </header>
                    <div className="Register_modal-body">
                        <InputBar placeholder='Name' width='100%'/>
                        <InputBar placeholder='Username' width='100%'/>
                        <InputBar placeholder='Password' width='100%' type='password'/>
                    </div>

                    <div className="Register_modal-icon-box">
                        <Button width={'100%'} btnType={'primary'}>Register</Button>
                    </div>

                </form>
            </div>
            

               

           
        </div>
    );
}
 
export default RegisterModal;