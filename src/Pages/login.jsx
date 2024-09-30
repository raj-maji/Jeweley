import React from 'react'
import './CSS/LoginSignup.css'
import { Link } from "react-router-dom";

const login = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Login</h1>
        <div className="loginsignup-fields">
          <input type='text' placeholder='Your Name'/>
          <input type='email' placeholder='Email Address'/>
          <input type='password' placeholder='Password'/>
        </div>
        <button>Login</button>
        <p className='loginsignup-login'>Don't have an account? <Link to="/signup">Signup</Link></p>
      </div>
    </div>
  )
}

export default login;