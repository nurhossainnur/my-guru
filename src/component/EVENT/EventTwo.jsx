import React from 'react'
import img_2 from './img/22.jpg'
import MainFooter from '../Footer/MainFooter'
import './Event.css'
import BackToTopButton from '../BackToTopButton'
const EventTwo = () => {
  return (
    <div>
      <div className='event-main-div'>
        <div className="event-2-img">
          <img src={img_2} alt="" />
      
        </div>
        <p className='event-2-head-text'><span className='frist-2'><span className='arr-29-arr-2'>12 APR</span>
        CELEBRATE HOLI WITH GURU PALACE</span> 
            <span className='last-2'>Posted at 06:50h in Events by admin</span></p>
        <div className='event-2-textand-img'>
          <ul>

            <li><span className='comon-e-2'>Address</span> <br /> 2215 US Highway 1 South, North Brunswick, NJ 08902</li>
            <li><span className='comon-e-2'>Timing</span> <br />
            Sunday, March 20 2019 <br />
            10am to 4pm <br />
            <span>Unlimited Buffet With Holi Dishes</span></li>
            <li> <span className='comon-e-2'>Phone</span> <br />
                <span className='comon-r-2'>732.398.9022</span></li>

          </ul>
          <a href="https://events.sulekha.com/celebrate-holi-festival-of-colours_event-in_north-brunswick-nj_305508"target="_blank"><button className='event-two-button-2'>Buy Tickets Now</button></a>

          </div>
        
    </div>
    <MainFooter />
    <BackToTopButton />
    </div>
  )
}

export default EventTwo
