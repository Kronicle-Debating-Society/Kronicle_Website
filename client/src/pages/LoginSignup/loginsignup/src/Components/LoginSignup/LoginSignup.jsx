import React from 'react'
import './LoginSignup.css'
import password_icon from 'C:\Users\KIIT0001\Desktop\debating\Kronicle_Website\client\src\pages\LoginSignup\loginsignup\src\Components\assets\password1.png'
import email_icon from'Kronicle_Website/client/src/pages/LoginSignup/loginsignup/src/Components/assets/mailid.png'

import user_icon from 'Kronicle_Website/client/src/pages/LoginSignup/loginsignup/src/Components/assets/usericon.png'


const LoginSignup = () => {
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>Sign UP</div>
            <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" />
                </div>
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" />
                </div>
            </div>
            <div className="forgot-password">Forgot Password? <span>Click here!</span></div>
            <div className="submit-container">
                <div className="submit">Sign Up</div>
                <div className="submit">Login</div>
            </div>
    </div>
  
  )
}

export default LoginSignup
