import React from 'react'
import './LoginPage.css'

const LoginPage = () => {
  return (
    <div className='login-page'>
        <div className="wrapper">
  <div className="login_box">
    <div className="login-header">
      <span>Login</span>
    </div>

    <div className="input_box">
      <input type="text" id="user" className="input-field" required/>
      <label for="user" className="label">Username</label>
      <i className="bx bx-user icon"></i>
    </div>

    <div className="input_box">
      <input type="password" id="pass" className="input-field" required/>
      <label for="pass" className="label">Password</label>
      <i className="bx bx-lock-alt icon"></i>
    </div>

    <div className="remember-forgot">
      <div className="remember-me">
        <input type="checkbox" id="remember"/>
        <label for="remember">Remember me</label>
      </div>

      <div className="forgot">
        <a href="#">Forgot password?</a>
      </div>
    </div>

    <div className="input_box">
      <input type="submit" className="input-submit" value="Login"/>
    </div>

    <div className="register">
      <span>Don't have an account? <a href="#">Register</a></span>
    </div>
  </div>
</div>
    </div>
  )
}

export default LoginPage