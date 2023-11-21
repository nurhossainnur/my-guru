import React from 'react'
import img_3 from './img/33.jpg'
import MainFooter from '../Footer/MainFooter'
import './Event.css'
import BackToTopButton from '../BackToTopButton'
const EventThree = () => {
  return (
<div>
      <div className='event-main-div'>
        <div className="event-2-img">
          <img src={img_3} alt="" />
      
        </div>
        <p className='event-2-head-text'><span className='frist-2'><span className='arr-29-arr-2'>12 APR</span>
        CELEBRATE HAPPY FATHERS DAY WITH GURU PALACE</span> 
            <span className='last-2'>Posted at 06:49h in Events by admin</span></p>
        <div className='event-2-textand-img'>
          <ul>

            <li><span className='comon-e-2'>Address</span> <br /> 2215 US Highway 1 South, North Brunswick, NJ 08902</li>
            <li><span className='comon-e-2'>Timing</span> <br />
            Sunday, June 17 2018 <br />
            5pm to 10pm <br />
            <span>All you can eat in only $12.95</span></li>
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

export default EventThree
