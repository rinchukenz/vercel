import React from 'react'
import './Offers.css'
import exclusive from '../Assets/exclusive_image.png'

function Offers() {
  return (
    <div className="container">
      <div className='offers'>
        <div className="oleft">
            <h1>Exclusive</h1>
            <h2>Offers For You</h2>
            <p>ONLY BEST SELLERS PRODUCT</p>
            <button>Check Now</button>
        </div>
        <div className="oright">
            <img src={exclusive} alt="" />
        </div>
      
      </div>
    </div>
  )
}

export default Offers
