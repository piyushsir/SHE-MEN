import React from 'react'
import '../hero/hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
            <div className='hero-hand-icon'>
            <p className='hell1'>new</p>
            <img src={hand_icon} alt=""/><br></br>
            </div>
            <p className='hell'>collections</p>
            <p className='hell2'>for everyone</p>
            </div>
           <div className='hero-latest-btn'>
            <Link to="/shop"><div>Latest Collection</div></Link>
            <img src={arrow_icon} alt=""/>
           </div>
        </div>
        <div className='hero-right'>

            <img src={hero_image} alt=""/>

        </div>

    </div>
  )
}

export default Hero