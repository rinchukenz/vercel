import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

function Navbar() {

  const {getTotalCartItems} = useContext(ShopContext)

    const [menu,setMenu] = useState("shop")

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPZEEEE</p>
      </div>
      <div>
        <ul className='nav-menu'>
            <li className='list' onClick={()=>{setMenu("shop")}}><Link to="/" style={{ textDecoration: 'none' }}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li className='list' onClick={()=>{setMenu("kids")}}><Link to="/kids" style={{ textDecoration: 'none' }}>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
            <li className='list' onClick={()=>{setMenu("mens")}}><Link to="/mens" style={{ textDecoration: 'none' }}>Mens</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li className='list' onClick={()=>{setMenu("womens")}}><Link to="/womens" style={{ textDecoration: 'none' }}>Womens</Link>{menu==="womens"?<hr/>:<></>}</li>
            
        </ul>
      </div>
      <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart">
         <img src={cart_icon} alt="" /> 
        </Link>
        <div className="nav-cart-counter">{getTotalCartItems()}</div>
      </div>
      
    </div>
     
  )
}

export default Navbar
