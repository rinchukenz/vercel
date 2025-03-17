import React from 'react'
import './Css/LoginSignup.css'

function LoginSignup() {
  return (
    <div className='ls'>
      <div className="ls-container">
        <h1>Sign Up</h1>
        <div className="ls-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p ls-login>Already have an account? <span>Login here</span></p>
        <div className="ls-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup
