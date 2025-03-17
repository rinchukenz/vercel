import React from 'react'
import './NewsLetter.css'

function NewsLetter() {
  return (
    <div className="container">
      <div className='newsletter'>
        
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div className="box">
            <input type='email' placeholder='Your email id'/>
            <button>Subscribe</button>
        </div>
        
       
      
      </div>
    </div>
  )
}

export default NewsLetter
