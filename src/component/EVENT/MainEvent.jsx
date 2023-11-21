import React from 'react'
import img_1 from './img/1.png'
import img_2 from './img/2.jpg'
import img_3 from './img/3.jpg'
import img_4 from './img/4.jpg'
import { useNavigate } from 'react-router-dom'

import './Event.css'
import MainFooter from '../Footer/MainFooter'
import BackToTopButton from '../BackToTopButton'
const MainEvent = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div className='gallery-bg'>
            <h1>Events</h1>
        </div>
        <div className="event-bg">
            <div className="img-div">
            <div className='main-event-cart'   onClick={() => navigate("/eventone")} >
          
                <div>
                    <img src={img_1} alt="" />
                </div>
                <p>Celebrate Happy Mothers day with Guru Palace</p>
             

            </div>

            <div  className='main-event-cart'  onClick={() => navigate("/eventtwo")}>
            
                <div>
                    <img src={img_2} alt="" />
                </div>
                <p>Celebrate Holi with Guru Palace</p>
          
            </div>

            <div  className='main-event-cart'  onClick={() => navigate("/eventthree")}>
         
                <div>
                    <img src={img_3} alt="" />
                </div>
                <p>Celebrate Happy Fathers day with Guru Palace</p>
       
            </div>

            <div  className='main-event-cart' onClick={() => navigate("/eventfour")}>
   
                <div>
                    <img src={img_4} alt="" />
                </div>
                <p>Guru Palace Banquet Grand Buffet Special</p>
               
            </div>
            </div>
        </div>
        <MainFooter />
        <BackToTopButton />
    </div>
  )
}

export default MainEvent
