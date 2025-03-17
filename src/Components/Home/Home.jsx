import React from 'react'
import './Home.css'
import hand from '../Assets/hand_icon.png'
import girl from '../Assets/hero_image.png'
import arrow from '../Assets/arrow.png'

function Home() {
  return (
    <div className='home'>
        <div className="left">
          <h2>NEW ARRIVALS ONLY</h2>
          <div>
            <div className="hand-icon">
                <p>new</p>
                <img src={hand} alt="" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
          </div>
          <div className="home-latest-btn">
            <button>Latest collection <img src={arrow} alt="" /> </button>
          </div>
        </div>
        <div className="right">
            <img src={girl} alt="" />
        </div>
      
    </div>
  )
}

export default Home
