import React from 'react'
import one from './img/about-1.jpg'

import uber from './img/uber-logo.png'
import halal from './img/halal-logo.png'
import './ourstoey.css'
import { useNavigate } from 'react-router-dom'
import BackToTopButton from '../../BackToTopButton'


const OurStory = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-full'>
      <div className="main-div">
        <div className="frist-div">
          <div className="left-div">
            <img src={one} alt="" />
          </div>
          <div className="right-div">
            <h3>OUR STORY</h3>
            <p className='line'></p>
            <p className='about-para'>At Guru Palace Indian Restaurant, we offer distinctive cuisine in an informal, friendly setting. Our restaurant enjoys a reputation for impeccable service, elegant Asian-style décor, and exquisite Indian food. Dining at our restaurant is like visiting India without leaving your hometown–an exciting blend of authentic Indian food, culture, and atmosphere awaits.</p>
            <button className='button-know'onClick={() => navigate("/about-us")} >Know More About Us</button>
          </div>
        </div>
      </div>  
        <div className="last-div">
          <img src={uber} alt="" className="uber-img" />
          <img src={halal} alt="" className="halal-img" />
        </div>

    <BackToTopButton />
    </div>
        
  )
}

export default OurStory




