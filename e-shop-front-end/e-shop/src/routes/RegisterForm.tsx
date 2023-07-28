import envelopeIcon from '../images/loginForm/envelope-closed-svgrepo-com.svg'
import lockIcon from '../images/loginForm/lock-closed-svgrepo-com.svg'
import profileIcon from '../images/loginForm/profile-svgrepo-com.svg'
import phoneIcon from '../images/loginForm/phone-svgrepo-com.svg'

export const RegisterForm = () => {
    return (
        <div className="registerFormContainer">
            <div className="loginAndRegisterForm">
                <div className="loginAndRegisterFormHeader">
                    Sign Up
                </div>
                <div className="loginFormBody">
                    <div className="loginFormBodyInput">
                        <label htmlFor="email">Email</label>
                        <div className="inputContainer">
                            <img src={envelopeIcon} alt="" className='loginFormIcon'/>
                            <input type="email" name="email" id="email" className='loginFormField' placeholder="example@gmail.com"/>
                        </div>
                    </div>
                    <div className="loginFormBodyInput">
                        <label htmlFor="password">Password</label>
                        <div className="inputContainer">
                            <img src={lockIcon} alt="" className='loginFormIcon'/>
                            <input type="password" name="password" id="password" className='loginFormField' placeholder="*******"/>
                        </div>
                    </div>
                    <div className="loginFormBodyInput">
                        <label htmlFor="password">Confirm password</label>
                        <div className="inputContainer">
                            <img src={lockIcon} alt="" className='loginFormIcon'/>
                            <input type="r_password" name="r_password" id="r_password" className='loginFormField' placeholder="*******"/>
                        </div>
                    </div>
                    <div className="loginFormBodyInput">
                        <label htmlFor="email">Phone</label>
                        <div className="inputContainer">
                            <img src={phoneIcon} alt="" className='loginFormIcon'/>
                            <input type="phone" name="phone" id="phone" className='loginFormField' placeholder="+37255683467"/>
                        </div>
                    </div>
                    <div className="loginFormBodyInput">
                        <label htmlFor="email">First name</label>
                        <div className="inputContainer">
                            <img src={profileIcon} alt="" className='loginFormIcon'/>
                            <input type="first_name" name="first_name" id="first_name" className='loginFormField' placeholder="John"/>
                        </div>
                    </div>
                    <div className="loginFormBodyInput">
                        <label htmlFor="email">Last name</label>
                        <div className="inputContainer">
                            <img src={profileIcon} alt="" className='loginFormIcon'/>
                            <input type="last_name" name="last_name" id="last_name" className='loginFormField' placeholder="Smith"/>
                        </div>
                    </div>
                    <button className="loginFormButton">Sign Up</button>
                </div>
            </div>
        </div>
    );
}