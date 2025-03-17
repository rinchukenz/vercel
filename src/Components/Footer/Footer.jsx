import React from 'react'
import './Footer.css'
import whatsapp from '../Assets/whatsapp_icon.png'
import insta from '../Assets/instagram_icon.png'
import pintrest from '../Assets/pintester_icon.png'
import logo from '../Assets/logo.png'

function Footer() {
  return (
    <div className='footer'>
      <div className="foot-logo">
        <img src={logo} alt="" />
        <p>SHOPZEE</p>
      </div>
      <div className="foot-list">
        <ul>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </div>
      <div className="icons">
        <img src={insta} alt="" />
        <img src={pintrest} alt="" />
        <img src={whatsapp} alt="" />
      </div>
      <hr/>
      <p>Copyright @ 2023 - All Rights Reserved.</p>
      
    </div>
  )
}

export default Footer
